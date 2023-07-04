const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [K, N] = input[0].split(" ").map((v) => +v);
const inputArr = input.slice(1).map((v) => +v);

solution(K, N, inputArr);

// ------------------------------------------------------------------

function solution(K, N, inputArr) {
  let start = 1;
  let end = Math.max(...inputArr);
  let answer = 0;
  while (start <= end) {
    let tmp = Math.floor((start + end) / 2);
    let count = 0;
    for (let i = 0; i < K; i++) {
      count += Math.floor(inputArr[i] / tmp);
    }
    if (count >= N) {
      answer = tmp;
      start = tmp + 1;
    } else {
      end = tmp - 1;
    }
  }
  console.log(answer);
}