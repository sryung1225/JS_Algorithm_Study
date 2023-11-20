const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = parseInt(input, 10);

console.log(solution(N));

// ------------------------------------------------------------------

function solution(N) {
  const fibo = [1, 2];
  for (let i = 2; i <= N; i++) {
    fibo.push((fibo[i - 1] + fibo[i - 2]) % 10007);
  }
  return fibo[N - 1];
}
