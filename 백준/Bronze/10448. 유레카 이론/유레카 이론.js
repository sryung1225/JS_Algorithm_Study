const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input.shift();

// ------------------------------------------------------------------

function tri(n) {
  return (n * (n + 1)) / 2;
}

function solution(K) {
  let numArr = [];
  for (let i = 1; tri(i) <= K; i++) {
    numArr.push(tri(i));
  }
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      for (let k = 0; k < numArr.length; k++) {
        if (numArr[i] + numArr[j] + numArr[k] === K) {
          return 1;
        }
      }
    }
  }
  return 0;
}

const answer = [];
input.forEach((num) => {
  answer.push(solution(num));
});
console.log(answer.join("\n"));