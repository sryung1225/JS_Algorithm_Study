const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const T = +input[0];
const arr = input.slice(1);

solution(T, arr);

// ------------------------------------------------------------------

function solution(T, arr) {
  const answer = [];
  for (let i = 0; i < T * 2; i += 2) {
    const k = +arr[i];
    const n = +arr[i + 1];

    const apart = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      apart[0][i] = i;
    }
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
      }
    }
    answer.push(apart[k][n]);
  }
  console.log(answer.join("\n"));
}