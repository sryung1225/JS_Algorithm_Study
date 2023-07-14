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
  let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  if (obj[sorted[0]] !== obj[sorted[1]]) {
    frq = +sorted[0];
  } else {
    const tmp = [+sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
      if (obj[sorted[i]] === obj[sorted[0]]) {
        tmp.push(+sorted[i]);
      } else {
        break;
      }
    }
    tmp.sort((a, b) => a - b);
    frq = tmp[1];
  }
  answer.push(frq);

  // 범위
  let ran = inputArr[n - 1] - inputArr[0];
  answer.push(ran);

  console.log(answer.join("\n"));
}