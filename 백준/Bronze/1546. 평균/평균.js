const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = +input[0];
const inputArr = input[1].split(" ").map((v) => +v);

solution(num, inputArr);

// ------------------------------------------------------------------

function solution(num, inputArr) {
  const max = Math.max(...inputArr);
  let sum = inputArr.reduce((acc, cur) => acc + (cur / max) * 100, 0);
  let answer = sum / num;
  console.log(answer.toFixed(2));
}
