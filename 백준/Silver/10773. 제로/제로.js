const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const K = input.shift();

solution(K, input);

// ------------------------------------------------------------------

function solution(K, input) {
  const array = [];
  for (let i = 0; i < K; i++) {
    if (input[i] === 0) {
      array.pop();
    } else {
      array.push(input[i]);
    }
  }
  const answer = array.reduce((acc, cur) => acc + cur, 0);
  console.log(answer);
}