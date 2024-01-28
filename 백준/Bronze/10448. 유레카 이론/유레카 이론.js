const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();

// ------------------------------------------------------------------

function tri(n) {
  return (n * (n + 1)) / 2;
}

function solution(K) {
  const arrK = [];
  for (let i = 1; tri(i) <= K; i++) {
    arrK.push(tri(i));
  }
  for (let i = 0; i < arrK.length; i++) {
    for (let j = 0; j < arrK.length; j++) {
      for (let k = 0; k < arrK.length; k++) {
        if (arrK[i] + arrK[j] + arrK[k] === K) {
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