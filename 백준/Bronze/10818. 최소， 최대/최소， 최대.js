const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input[1].split(" ").map((v) => +v);
solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  const min = Math.min(...inputArr);
  const max = Math.max(...inputArr);
  console.log(min, max);
}