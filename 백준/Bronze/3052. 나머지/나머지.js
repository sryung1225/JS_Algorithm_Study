const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map(v => +v % 42);
let answer = [...new Set(arr)].length;
console.log(answer);