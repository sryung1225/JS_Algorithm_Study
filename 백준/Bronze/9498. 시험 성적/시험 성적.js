const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const score = parseInt(input, 10);
  let answer = "";
  if (score <= 100 && score >= 90) {
    answer = "A";
  } else if (score >= 80) {
    answer = "B";
  } else if (score >= 70) {
    answer = "C";
  } else if (score >= 60) {
    answer = "D";
  } else {
    answer = "F";
  }
  console.log(answer);
}