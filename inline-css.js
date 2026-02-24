const fs = require('fs');
const path = require('path');
const buildDir = path.join(__dirname, 'build');
const htmlPath = path.join(buildDir, 'index.html');
const cssDir = path.join(buildDir, 'static', 'css');

try {
  let html = fs.readFileSync(htmlPath, 'utf8');
  const files = fs.readdirSync(cssDir);
  
  files.forEach(file => {
    if (file.endsWith('.css')) {
      const cssContent = fs.readFileSync(path.join(cssDir, file), 'utf8');
      const linkRegex = new RegExp(`<link href="[^"]*${file}"[^>]*rel="stylesheet"[^>]*>|<link rel="stylesheet"[^>]*href="[^"]*${file}"[^>]*>`);
      html = html.replace(linkRegex, `<style>${cssContent}</style>`);
    }
  });

  fs.writeFileSync(htmlPath, html);
  console.log('Success: CSS successfully inlined into index.html!');
} catch (err) {
  console.error('Error inlining CSS:', err);
}