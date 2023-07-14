const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const cases = +input[0];
for (let i = 1; i < input.length; i += 2) {
  const [n, m] = input[i].split(" ").map((v) => +v);
  const kArr = input[i + 1].split(" ").map((v) => +v);
  solution(n, m, kArr);
}

// ------------------------------------------------------------------

function solution(n, m, kArr) {
  let count = 0;
  while (1) {
    const max = Math.max(...kArr);
    const num = kArr.shift();
    if (num === max) {
      count++;
      if (m === 0) break;
    } else {
      kArr.push(num);
    }
    if (m === 0) {
      m = kArr.length - 1;
    } else {
      m--;
    }
  }
  console.log(count);
}