const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/app/(storefront)');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Reduce massive headings
  content = content.replace(/lg:text-7xl/g, 'lg:text-5xl');
  content = content.replace(/sm:text-6xl/g, 'sm:text-5xl');
  content = content.replace(/text-4xl sm:text-6xl/g, 'text-3xl sm:text-5xl');
  content = content.replace(/text-4xl sm:text-5xl/g, 'text-3xl sm:text-4xl');
  
  content = content.replace(/md:text-4xl/g, 'md:text-3xl');
  content = content.replace(/lg:text-4xl/g, 'lg:text-3xl');
  content = content.replace(/sm:text-4xl/g, 'sm:text-3xl');
  
  content = content.replace(/text-3xl sm:text-4xl/g, 'text-2xl sm:text-3xl');
  content = content.replace(/text-2xl sm:text-3xl/g, 'text-xl sm:text-2xl');
  content = content.replace(/text-xl sm:text-2xl/g, 'text-lg sm:text-xl');
  
  // Reduce body text on desktop
  content = content.replace(/sm:text-lg/g, 'sm:text-base');
  content = content.replace(/md:text-lg/g, 'md:text-base');
  content = content.replace(/lg:text-xl/g, 'lg:text-lg');
  
  // Button texts
  content = content.replace(/px-6 py-3.5/g, 'px-5 py-2.5'); // Slim down buttons slightly
  content = content.replace(/px-8 py-4/g, 'px-6 py-3');
  
  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log('Updated', file);
  }
});

console.log('Total files updated:', changedFiles);
