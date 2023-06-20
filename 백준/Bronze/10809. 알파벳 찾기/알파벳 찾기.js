const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < ALPHA.length; i++) {
    answer += `${input.indexOf(ALPHA[i])} `;
  }
  answer = answer.slice(0, answer.length - 1);
  console.log(answer);
}