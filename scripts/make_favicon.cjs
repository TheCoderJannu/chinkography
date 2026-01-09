const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'public', 'favicon.png');
const dst = path.join(root, 'public', 'favicon.ico');

if (!fs.existsSync(src)) {
  console.error('Source PNG not found:', src);
  process.exit(1);
}

pngToIco.default(src)
  .then(buf => {
    fs.writeFileSync(dst, buf);
    console.log('Saved', dst);
  })
  .catch(err => {
    console.error('Failed to create ICO:', err);
    process.exit(1);
  });
