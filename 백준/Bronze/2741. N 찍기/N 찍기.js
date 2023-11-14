const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = parseInt(input, 10);

solution(N);

// ------------------------------------------------------------------

function solution(N) {
  const answer = [];
  for (let i = 1; i <= N; i++) {
    answer.push(i);
  }
  console.log(answer.join("\n"));
}