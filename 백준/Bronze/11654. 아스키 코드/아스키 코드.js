const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  console.log(input.charCodeAt());
}
