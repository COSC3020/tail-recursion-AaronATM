const fs = require('fs');
const assert = require('assert');
const arr1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

eval(fs.readFileSync('code.js')+'');

assert(JSON.stringify(fib(15)) == JSON.stringify(arr1));