const fs = require('fs');
const file = 'src/app/(storefront)/articles/ev-battery-care/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Hero Image
const headerPattern = `{/* Interactive SOC Widget */}`;
const heroImageCode = `
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Lithium-Ion_Battery_for_BMW_i3_-_Battery_Pack.JPG"
            alt="EV Battery Pack"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
              EV Battery Care
            </span>
          </div>
        </div>
`;
content = content.replace(headerPattern, heroImageCode + '\n        ' + headerPattern);

fs.writeFileSync(file, content);
console.log("Rewritten battery guide");
