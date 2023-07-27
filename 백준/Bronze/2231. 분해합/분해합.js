const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const n = +input;

solution(n);

// ------------------------------------------------------------------

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = (i + "").split("").reduce((acc, cur) => +acc + +cur, i);
    if (n === sum) {
      answer = i;
      break;
    }
  }
  console.log(answer);
}