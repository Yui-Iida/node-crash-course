// const person = {
//   name: 'YUI',
//   age: 20,
// };

// module.exports = person;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and ${this.age} yo`);
  }
}

module.exports = Person;
