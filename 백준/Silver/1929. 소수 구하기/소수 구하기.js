const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const [m, n] = input.split(" ").map((v) => +v);

solution(m, n);

// ------------------------------------------------------------------

function isPrime(x) {
  if (x === 1) return false;
  let end = Math.sqrt(x);
  for (let i = 2; i <= end; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(m, n) {
  let answer = "";
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) answer += `${i} `;
  }
  console.log(answer.split(" ").join("\n"));
}