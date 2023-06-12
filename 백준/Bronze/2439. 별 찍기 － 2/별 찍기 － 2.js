const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const size = +input;
  for (let i = 1; i <= size; i++) {
    let str = "";
    for (let j = 1; j <= size; j++) {
      if (i <= size - j) str += " ";
      else str += "*";
    }
    console.log(str);
  }
}