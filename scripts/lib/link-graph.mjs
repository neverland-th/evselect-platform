// Evidence from rendered HTML anchors. Counts do not prove semantic relevance or rankings.
export function buildLinkGraph(pages, publicRoutes, requiredPaths = []) {
  const byRoute = new Map(pages.map(page => [page.route, page]));
  const publicSet = new Set(publicRoutes);
  const edges = pages.flatMap(page => page.links.filter(link => link.target).map(link => ({
    source: page.route, destination: link.target.path, hash: link.target.hash,
    anchor: link.label, scope: link.scope, inline: link.inline === true,
    nofollow: /\bnofollow\b/i.test(link.rel),
  })));
  const navigable = edges.filter(edge => !edge.nofollow);
  const sources = (route, predicate) => [...new Set(navigable.filter(edge =>
    edge.destination === route && edge.source !== route && predicate(edge)
  ).map(edge => edge.source))].sort();
  function depths(bodyOnly) {
    const result = new Map([['/', 0]]);
    const queue = ['/'];
    for (let i = 0; i < queue.length; i++) {
      for (const edge of navigable.filter(edge => edge.source === queue[i])) {
        if ((bodyOnly && edge.scope === 'navigation') || !publicSet.has(edge.destination) || result.has(edge.destination)) continue;
        result.set(edge.destination, result.get(queue[i]) + 1);
        queue.push(edge.destination);
      }
    }
    return result;
  }
  const allDepth = depths(false), bodyDepth = depths(true);
  const nodes = publicRoutes.map(route => ({
    route,
    incomingSources: sources(route, () => true),
    bodyIncomingSources: sources(route, edge => edge.scope !== 'navigation'),
    contextualArticleSources: sources(route, edge => edge.inline && edge.source.startsWith('/articles/')),
    contextualArticleDestinations: [...new Set(navigable.filter(edge =>
      edge.source === route && edge.inline && edge.destination !== route && edge.destination.startsWith('/articles/')
    ).map(edge => edge.destination))].sort(),
    depthFromHome: allDepth.get(route) ?? null,
    bodyDepthFromHome: bodyDepth.get(route) ?? null,
  }));
  const appEntry = edge => edge.destination === '/vehicle-style' ||
    edge.destination === '/vehicle-style/studio' || (edge.destination === '/' && edge.hash === 'vehicle-style');
  const warnings = nodes.filter(node => node.route.startsWith('/articles/') && !node.contextualArticleSources.length)
    .map(node => ({ code: 'no-contextual-incoming', route: node.route, detail: 'No inline incoming link from another article; editorial review required, not an automatic quota.' }));
  for (const edge of edges) {
    if (edge.scope !== 'navigation' && /\bnoindex\b/i.test(byRoute.get(edge.destination)?.robots || '') &&
      edge.destination !== '/vehicle-style/studio') {
      warnings.push({ code: 'body-link-to-noindex', route: edge.source, detail: edge.destination });
    }
  }
  const missingRequiredPaths = requiredPaths.filter(path => !navigable.some(edge =>
    edge.source === path.source && edge.destination === path.destination &&
    edge.inline && edge.hash === (path.hash || '')
  ));
  return {
    scope: 'Unique source pages, excluding self-links. Inline candidates require reader review; navigation and body depth are separate.',
    nodes,
    appEntryLinks: navigable.filter(edge => edge.scope !== 'navigation' && appEntry(edge)),
    warnings,
    missingRequiredPaths,
  };
}
