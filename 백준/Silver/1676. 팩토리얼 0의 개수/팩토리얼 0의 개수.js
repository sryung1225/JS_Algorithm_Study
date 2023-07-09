const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const n = +input;
solution(n);

// ------------------------------------------------------------------

function solution(n) {
  let answer = 0;
  for (let i = 5; i <= n; i *= 5) {
    answer += parseInt(n / i);
  }
  console.log(answer);
}