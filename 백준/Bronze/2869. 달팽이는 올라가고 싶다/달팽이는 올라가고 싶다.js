const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
const [A, B, V] = input.map((v) => +v);

solution(A, B, V);

// ------------------------------------------------------------------

function solution(A, B, V) {
  let days = Math.floor((V - A) / (A - B)) + 1;
  if (V - A * days + B * (days - 1) !== 0) {
    days++;
  }
  console.log(days);
}