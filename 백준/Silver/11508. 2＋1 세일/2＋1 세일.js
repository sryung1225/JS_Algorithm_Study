const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // ------------------------------------------------------------------
  const N = Number(input.shift());
  let C = [...input].map(Number);
  C.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if ((i + 1) % 3 === 0) continue;
    answer += C[i];
  }
  console.log(answer);
  // ------------------------------------------------------------------
  process.exit();
});