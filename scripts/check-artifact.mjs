import fs from 'node:fs';
import path from 'node:path';
const root = 'dist';
if (!fs.existsSync(root)) { console.error('NO dist/ after build'); process.exit(2); }
let count = 0, total = 0;
(function walk(d){
  for (const e of fs.readdirSync(d,{withFileTypes:true})) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p) : (count++, total += fs.statSync(p).size);
  }
})(root);
console.log('TOTAL FILES:', count);
console.log('TOTAL BYTES:', total);