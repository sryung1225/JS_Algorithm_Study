const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

solution(input, N, M);

// ------------------------------------------------------------------

function solution(input, N, M) {
  const passwords = {};
  for (let i = 0; i < N; i++) {
    const step = input[i].split(" ");
    passwords[step[0]] = step[1].trim();
  }
  for (let j = N; j < N + M; j++) {
    console.log(passwords[input[j].trim()]);
  }
}