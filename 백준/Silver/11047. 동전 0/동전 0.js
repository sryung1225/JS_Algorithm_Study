const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map((v) => +v);
const arrA = input.slice(1).map((v) => +v);

solution(N, K, arrA);

// ------------------------------------------------------------------

function findMax(K, arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= K) {
      max = arr[i];
    } else {
      return max;
    }
  }
  return max;
}

function solution(N, K, arrA) {
  let answer = 0;
  let sum = 0;
  while (sum !== K) {
    let max = findMax(K - sum, arrA);
    answer += Math.floor((K - sum) / max);
    sum += Math.floor((K - sum) / max) * max;
  }
  console.log(answer);
}