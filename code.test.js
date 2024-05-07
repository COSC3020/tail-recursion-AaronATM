const fs = require('fs');
const assert = require('assert');

var arr1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
var arr2 = [0, 1, 1, 2, 3, 5, 8];
var arr3 = [0, 1];
var arr4 = [0];
var arr5 = [0, 1, 1];
var arr6 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

eval(fs.readFileSync('code.js')+'');

assert(JSON.stringify(fib(15))===JSON.stringify(arr1));
assert(JSON.stringify(fib(6))===JSON.stringify(arr2));
assert(JSON.stringify(fib(1))===JSON.stringify(arr3));
assert(JSON.stringify(fib(0))===JSON.stringify(arr4));
assert(JSON.stringify(fib(2))===JSON.stringify(arr5));
assert(JSON.stringify(fib(16))===JSON.stringify(arr6));