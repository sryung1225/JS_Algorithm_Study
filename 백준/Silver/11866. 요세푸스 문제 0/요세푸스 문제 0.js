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
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  const answer = [];
  let idx = 0;
  while (arr.length > 0) {
    idx = (idx + (K - 1)) % arr.length;
    answer.push(arr[idx]);
    arr = arr.slice(0, idx).concat(arr.slice(idx + 1));
  }
  console.log("<" + answer.join(", ") + ">");
}