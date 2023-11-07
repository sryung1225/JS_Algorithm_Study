const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

solution(input);

// ------------------------------------------------------------------

function solution(input) {
  const numArr = input.map((v) => +v);
  const unique = numArr.reduce((acc, cur) => acc + cur * cur, 0) % 10;
  console.log(unique);
}