const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((v) => +v);
const arrN = input.slice(1, N + 1).map((v) => v.trim());
const arrMSet = new Set(input.slice(N + 1).map((v) => v.trim()));

solution(arrN, arrMSet);

// ------------------------------------------------------------------

function solution(arrN, arrMSet) {
  const strangers = arrN.filter((who) => arrMSet.has(who));
  console.log(strangers.length);
  console.log(strangers.sort().join("\n"));
}
