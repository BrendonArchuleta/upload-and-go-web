import fs from 'node:fs';

function dump(name){
  if (fs.existsSync(name)) {
    console.log('--- ' + name + ' ---');
    console.log(fs.readFileSync(name,'utf8'));
  } else {
    console.log(name + ': (none)');
  }
}
dump('.boltignore');
dump('.gitignore');