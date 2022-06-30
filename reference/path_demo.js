const { extname } = require('path');
const path = require('path');

// Base file name
// console.log(__filename);
console.log(path.basename(__filename));

// Directory name
// console.log(__dirname);
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create Path object
console.log(path.parse(__filename).base);
// {
//   root: '/',
//   dir: '/Users/iidayui/Desktop/udacity/node-crash-course/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

// Concatenate Paths
console.log(path.join(__dirname, 'test', 'hello.html'));
