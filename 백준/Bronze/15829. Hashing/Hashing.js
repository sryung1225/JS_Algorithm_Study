const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const str = input[1];
solution(n, str);

// ------------------------------------------------------------------

function solution(n, str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let num = [...str].reduce((acc, cur, idx) => {
    let tmp = alpha.indexOf(cur) + 1;
    return acc + tmp * Math.pow(31, idx) % 1234567891;
  }, 0);
  console.log(num % 1234567891);
}