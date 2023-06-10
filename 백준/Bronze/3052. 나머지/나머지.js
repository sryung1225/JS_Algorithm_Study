const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

let arr = input.map(v => v % 42);
let answer = new Set(arr).size;
console.log(answer);