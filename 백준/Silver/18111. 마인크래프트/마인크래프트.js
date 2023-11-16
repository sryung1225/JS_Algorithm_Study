const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M, B] = input.shift().split(" ").map(Number);

solution(N, M, B, input);

// ------------------------------------------------------------------

function solution(N, M, B, input) {
  const heights = input.map((row) => row.split(" ").map(Number));

  let minTime = Infinity;
  let resultHeight = -1;

  for (let targetHeight = 256; targetHeight >= 0; targetHeight--) {
    let getBlocks = 0;
    let useBlocks = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const diff = heights[i][j] - targetHeight;
        if (diff >= 0) {
          // 땅에서 블록 빼서 가지기
          getBlocks += diff;
        } else {
          // 인벤에서 블록 꺼내서 쓰기
          useBlocks -= diff;
        }
      }
    }

    if (B - useBlocks + getBlocks >= 0) {
      const time = 2 * getBlocks + useBlocks;
      if (time < minTime) {
        minTime = time;
        resultHeight = targetHeight;
      }
    }
  }
  console.log(minTime, resultHeight);
}