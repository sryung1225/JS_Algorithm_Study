const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

solution(num);

// ------------------------------------------------------------------

function solution(num) {
  let count = 1;
  let answer = 666;
  while (count !== num) {
    answer++;
    if (String(answer).includes("666")) {
      count++;
    }
  }
  console.log(answer);
}