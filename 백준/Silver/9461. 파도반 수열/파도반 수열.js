const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input.shift();

solution(N, input);

// ------------------------------------------------------------------

function solution(N, input) {
  const arr = [0, 1, 1, 1, 2, 2];
  for (let i = 0; i < N; i++) {
    let answer = 0;
    let num = input[i];
    if (!arr[num]) {
      for (let j = arr.length; j <= num; j++) {
        arr.push(arr[j - 1] + arr[j - 5]);
      }
    }
    answer = arr[num];
    console.log(answer);
  }
}