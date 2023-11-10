const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const T = parseInt(input[0], 10);
const N = input.slice(1).map(Number);

solution(T, N);

// ------------------------------------------------------------------

function solution(T, N) {
  N.forEach((num) => {
    const fibonacci = [
      [1, 0],
      [0, 1],
    ];
    for (let i = 2; i <= num; i++) {
      fibonacci[i] = [
        fibonacci[i - 1][0] + fibonacci[i - 2][0],
        fibonacci[i - 1][1] + fibonacci[i - 2][1],
      ];
    }
    console.log(fibonacci[num].join(" "));
  });
}