const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const str = input[1];
solution(n, str);

// ------------------------------------------------------------------

function solution(n, str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let num = [...str].reduce((acc, cur, idx) => {
    let tmp = BigInt(alpha.indexOf(cur) + 1);
    return (acc + tmp * BigInt(Math.pow(31, idx))) % 1234567891n;
  }, 0n);
  console.log(num.toString());
}