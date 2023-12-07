const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const nums = input.shift().split(" ").map(Number);

  // 누적 합을 계산한 배열을 따로 분리해서 중복 계산을 줄임
  const sums = new Array(N + 1).fill(0);
  nums.forEach((v, i) => {
    sums[i + 1] = sums[i] + v;
  });

  const answer = [];
  for (let i = 0; i < M; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    answer.push(sums[end] - sums[start - 1]);
  }
  console.log(answer.join("\n"));
}
