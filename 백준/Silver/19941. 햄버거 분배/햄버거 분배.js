const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
let str = input[1].split("");

// ------------------------------------------------------------------

let answer = 0;
for (let i = 0; i < N; i++) {
  if (str[i] === "H" || str[i] === "-") continue;
  for (let j = Math.max(i - K, 0); j <= Math.min(i + K, N - 1); j++) {
    if (str[j] === "H") {
      str[j] = "-";
      answer++;
      break;
    }
  }
}

console.log(answer);