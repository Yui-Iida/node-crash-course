// const person = require('./person');
// console.log(person.name);

// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {});
// console.log(__dirname, __filename);

// const Person = require('./person');
// const person1 = new Person('Yui', 34);
// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();
logger.on('message', data => {
  console.log('Called Listner:', data);
});

logger.log('Hello Yui!');
logger.log('YAAAY');
