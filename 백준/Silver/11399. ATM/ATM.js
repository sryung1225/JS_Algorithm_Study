const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input.shift(), 10);

solution(N, input);

// ------------------------------------------------------------------

function solution(N, input) {
  const times = input[0].split(" ").map(Number);
  times.sort((a, b) => a - b);

  let answer = 0;
  times.forEach((time, index) => {
    answer += time * (N - index);
  });
  console.log(answer);
}