const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

// ------------------------------------------------------------------

const L = input[1].split(" ").map(Number);
const J = input[2].split(" ").map(Number);

// 주어진 체력 범위 내에서 최대한의 기쁨을 얻어야 하는 최적화 문제 => DP
// dp[i][j] = 체력이 j일 때, i명의 사람들에게 인사했을 때 얻을 수 있는 최대 기쁨
// 각 사람에게 인사할지 말지를 결정하며 최대 기쁨 갱신

const dp = Array.from({ length: N + 1 }, () => Array(101).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= 100; j++) {
    if (j - L[i - 1] > 0) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - L[i - 1]] + J[i - 1]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

const answer = Math.max(...dp[N].slice(1));
console.log(answer);
