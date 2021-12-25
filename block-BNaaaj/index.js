http protocols

var os = require('os');
var cpus = os.cpus().length;
var freeM = os.freemem();
var uptime = os.uptime;
console.log(cpus, freeM, uptime);

var fs = require('fs');
var {readFile, unlink } =require('fs');
