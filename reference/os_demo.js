const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
// console.log(os.arch(), os.cpus());

// Free memory
console.log(os.freemem(), os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
