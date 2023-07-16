const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const [n, m] = input.split(" ").map((v) => +v);

solution(n, m);

// ------------------------------------------------------------------

function solution(n, m) {
  let gcd = 1; // 최대공약수
  let lcm = 1; // 최소공배수

  for (let i = Math.min(n, m); i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
      break;
    }
  }
  lcm = (n * m) / gcd;
  console.log(gcd);
  console.log(lcm);
}