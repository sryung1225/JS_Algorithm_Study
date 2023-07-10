const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input[1].split(" ").map((v) => +v);
solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let answer = n;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 1) {
      answer--;
      continue;
    }
    for (let j = 2; j < inputArr[i]; j++) {
      if (inputArr[i] % j === 0) {
        answer--;
        break;
      }
    }
  }
  console.log(answer);
}