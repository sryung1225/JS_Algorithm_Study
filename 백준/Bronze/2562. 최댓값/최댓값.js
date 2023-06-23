const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  input = input.map((v) => +v);
  let max = Math.max(...input);
  let idx = input.indexOf(max)+1;
  console.log(max);
  console.log(idx);
}

