const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

solution(input, N, M);

// ------------------------------------------------------------------

function solution(input, N, M) {
  const pocketmonMap = {};
  for (let i = 0; i < N; i++) {
    pocketmonMap[input[i].trim()] = i + 1;
  }

  for (let i = N; i < N + M; i++) {
    const question = input[i].trim();
    if (isNaN(question)) {
      console.log(pocketmonMap[question]);
    } else {
      console.log(input[parseInt(question, 10) - 1]);
    }
  }
}