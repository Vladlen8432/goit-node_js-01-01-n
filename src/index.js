// ========== Example 2 ==========

// import path from 'node:path';
// const workDir = path.join(process.cwd(), 'src');
// const somePath = path.join('some_folder.txt', 'some_folder.txt');

// console.log(somePath);
// console.log(workDir);

// ========== Example 3 ==========

import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'text.txt');

// const fileContentPromise = await fs.readFile(filePath);
// console.log(fileContentPromise);

(async () => {
  try {
    const text = 'Hello World!';
    await fs.writeFile('output.txt', text);
    console.log('Text successfully written to file');
  } catch (error) {
    console.log(error);
  }
})();

// 02:04:00
