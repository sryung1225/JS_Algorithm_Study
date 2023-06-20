const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [h, w] = input[0].split(" ");
const inputArr = input.slice(1);

solution(h, w, inputArr);

// ------------------------------------------------------------------

function solution(h, w, inputArr) {
  let chessW = Array.from(Array(8), () => Array(8).fill(""));
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        chessW[i][j] = "W";
      } else {
        chessW[i][j] = "B";
      }
    }
  }
  let chessB = chessW.map((v) => v.map((k) => (k === "W" ? "B" : "W")));

  let min = 64;
  for (let x = 0; x <= h - 8; x++) {
    for (let y = 0; y <= w - 8; y++) {
      let comW = 0;
      let comB = 0;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (chessW[i][j] !== inputArr[x + i][y + j]) {
            comW++;
          } else if (chessB[i][j] !== inputArr[x + i][y + j]) {
            comB++;
          }
        }
      }
      if (Math.min(comW, comB) < min) {
        min = Math.min(comW, comB);
      }
    }
  }
  console.log(min);
}
