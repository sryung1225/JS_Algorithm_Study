const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1).map((v) => +v);

solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let answer = inputArr.sort((a, b) => a - b);
  console.log(answer.join("\n"));
}