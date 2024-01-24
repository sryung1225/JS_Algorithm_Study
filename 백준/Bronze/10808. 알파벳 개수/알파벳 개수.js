const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const S = fs.readFileSync(filePath).toString().trim();

// ------------------------------------------------------------------

const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const answer = new Array(ALPHA.length).fill(0);
for (let i = 0; i < S.length; i++) {
  const num = ALPHA.indexOf(S[i]);
  answer[num]++;
}
console.log(answer.join(" "));