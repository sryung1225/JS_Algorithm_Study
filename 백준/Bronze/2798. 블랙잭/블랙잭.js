const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((v) => +v);
const inputArr = input[1].split(" ").map((v) => +v);

solution(n, m, inputArr);

// ------------------------------------------------------------------

function solution(n, m, inputArr) {
  let answer = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = inputArr[i] + inputArr[j] + inputArr[k];
        if (Math.abs(m - answer) > Math.abs(m - sum) && sum <= m) {
          answer = sum;
        }
      }
    }
  }
  console.log(answer);
}