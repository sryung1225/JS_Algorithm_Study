const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString();
const n = +input;

solution(n);

// ------------------------------------------------------------------

function solution(n) {
  let binArr = n.toString(2).split("");
  binArr.shift();
  const answer = parseInt(binArr.join(""), 2);
  console.log(answer ? answer * 2 : n);
}