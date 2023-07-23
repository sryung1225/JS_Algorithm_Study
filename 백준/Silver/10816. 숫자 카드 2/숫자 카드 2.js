const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +input[0];
const cards = input[1].split(" ").map((v) => +v);
const m = +input[2];
const has = input[3].split(" ").map((v) => +v);

solution(n, cards, m, has);

// ------------------------------------------------------------------

function solution(n, cards, m, has) {
  let obj = {};
  cards.forEach((v) => {
    if (!obj[v]) {
      obj[v] = 1;
    } else {
      obj[v]++;
    }
  });

  const answer = [];
  has.forEach((v) => {
    if (obj[v]) {
      answer.push(obj[v]);
    } else {
      answer.push(0);
    }
  });
  console.log(answer.join(" "));
}