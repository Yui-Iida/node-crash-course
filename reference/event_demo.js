const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init obj
const myEmitter = new MyEmitter();

// Event Listner
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
