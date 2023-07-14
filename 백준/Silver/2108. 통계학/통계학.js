const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const inputArr = input.slice(1).map((v) => +v);

solution(n, inputArr);

// ------------------------------------------------------------------

function solution(n, inputArr) {
  let answer = [];

  // 산술평균
  let avg = Math.round(inputArr.reduce((acc, cur) => acc + cur, 0) / n);
  answer.push(avg);

  inputArr.sort((a, b) => a - b);

  // 중앙값
  let cen = inputArr[(n - 1) / 2];
  answer.push(cen);

  // 최빈값
  let frq = 0;
  const obj = {};
  inputArr.forEach((v) => {
    if (!obj[v]) obj[v] = 1;
    else obj[v]++;
  });
  let sorted = Object.entries(obj).sort((a, b) => {
    return b[1] - a[1] || a[0] - b[0];
  });
  if (sorted[0][1] !== sorted[1]?.[1]) {
    frq = +sorted[0][0];
  } else {
    frq = +sorted[1][0];
  }
  answer.push(frq);

  // 범위
  let ran = inputArr[n - 1] - inputArr[0];
  answer.push(ran);

  console.log(answer.join("\n"));
}