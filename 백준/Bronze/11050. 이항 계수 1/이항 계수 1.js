const fs = require("fs");
const [N, K] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

solution(N, K);

// ------------------------------------------------------------------

function solution(N, K) {
  let n = 1;
  for (let i = N - K + 1; i <= N; i++) {
    n *= i;
  }
  let k = 1;
  for (let i = 1; i <= K; i++) {
    k *= i;
  }
  console.log(n / k);
}