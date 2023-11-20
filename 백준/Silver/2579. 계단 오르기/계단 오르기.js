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
  const DP = new Array(N).fill(0);
  // DP배열에 각 계단에 도달하는 경우 중 최대 점수를 저장

  // 첫 번째 계단 점수
  DP[0] = input[0];
  // 두 번쨰 계단에 도달하는 점수 (1->2)
  DP[1] = input[0] + input[1];
  // 세 번째 계단에 도달하는 경우(1->3, 2->3) 중 최대 점수
  DP[2] = Math.max(input[0] + input[2], input[1] + input[2]);

  for (let i = 3; i <= N; i++) {
    // i 번쨰 계단에 도달하는 경우(i-2->i, i-3->i-1->i) 중 최대 점수
    DP[i] = Math.max(DP[i - 2] + input[i], DP[i - 3] + input[i - 1] + input[i]);
  }
  console.log(DP[N - 1]);
}