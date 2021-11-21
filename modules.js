const {people, ages} = require('./people');

// lo que exportemos a mano, estara disponible en xyz

console.log(people, ages)

const os = require('os');

console.log(os.homedir());