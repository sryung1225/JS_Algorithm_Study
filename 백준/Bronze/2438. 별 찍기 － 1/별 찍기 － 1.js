const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const num = +input;
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
}