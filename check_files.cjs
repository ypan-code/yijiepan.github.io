const fs = require('fs');
const path = require('path');

const files = [
  'public/IMG_0285.jpeg',
  'public/notes/Math_540_Project (3).pdf',
  'public/notes/Atiyah_Hirzebruch_s_Counterexample_to_the_Integral_Hodge_Conjecture (1).pdf',
  'public/notes/Representations_of_sp_4C.pdf'
];

files.forEach(f => {
  const fullPath = path.join(process.cwd(), f);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`${f}: ${stats.size} bytes`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
});
