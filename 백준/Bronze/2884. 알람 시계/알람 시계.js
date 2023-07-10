const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
solution(input);

// ------------------------------------------------------------------

function solution(input) {
  let [H, M] = input.map((v) => +v);
  if (M - 45 >= 0) {
    M -= 45;
  } else if (M - 45 < 0 && H > 0) {
    M += 15;
    H -= 1;
  } else {
    M += 15;
    H += 23;
  }
  console.log(H, M);
}