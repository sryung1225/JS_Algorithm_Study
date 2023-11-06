const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const T = +input[0];
const C = input.slice(1);

solution(T, C);

// ------------------------------------------------------------------

function solution(T, C) {
  const answer = [];
  C.forEach((item) => {
    const [num1, num2] = item.split(" ").map((v) => +v);
    answer.push(num1 + num2);
  });
  console.log(answer.join("\n"));
}
