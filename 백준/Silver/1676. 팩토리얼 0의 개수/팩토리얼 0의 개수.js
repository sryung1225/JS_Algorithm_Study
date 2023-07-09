const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const n = +input;
solution(n);

// ------------------------------------------------------------------

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) answer++;
    if (i % (5 * 5) === 0) answer++;
    if (i % (5 * 5 * 5) === 0) answer++;
  }
  console.log(answer);
}