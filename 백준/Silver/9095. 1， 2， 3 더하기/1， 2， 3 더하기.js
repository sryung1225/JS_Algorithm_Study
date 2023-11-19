const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift(), 10);

solution(n, input);

// ------------------------------------------------------------------

function solution(n, input) {
  input.forEach((n) => {
    const num = parseInt(n, 10);
    let dp = Array(num + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= num; i++) {
      dp[i] += dp[i - 1];
      if (i >= 2) dp[i] += dp[i - 2];
      if (i >= 3) dp[i] += dp[i - 3];
    }
    console.log(dp[num]);
  });
}