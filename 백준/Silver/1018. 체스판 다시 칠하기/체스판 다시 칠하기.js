const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [h, w] = input[0].split(" ");
const inputArr = input.slice(1);

solution(h, w, inputArr);

// ------------------------------------------------------------------

function solution(h, w, inputArr) {
  let chess = Array.from(Array(8), () => Array(8).fill(""));
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        chess[i][j] = "W";
      } else {
        chess[i][j] = "B";
      }
    }
  }

  let min = 64;
  for (let x = 0; x <= h - 8; x++) {
    for (let y = 0; y <= w - 8; y++) {
      let diff = 0;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (chess[i][j] !== inputArr[x + i][y + j]) {
            diff++;
          }
        }
      }
      if (Math.min(diff, 64 - diff) < min) {
        min = Math.min(diff, 64 - diff);
      }
    }
  }
  console.log(min);
}
