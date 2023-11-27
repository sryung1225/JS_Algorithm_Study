const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const parts = input.split("-");
  let answer = 0;
  for (let i = 0; i < parts.length; i++) {
    const calc = parts[i];
    let sum = calc.split("+").reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    if (i === 0) {
      answer += sum;
    } else {
      answer -= sum;
    }
  }
  console.log(answer);
}