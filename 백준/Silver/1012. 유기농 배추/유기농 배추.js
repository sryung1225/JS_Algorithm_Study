const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = parseInt(input.shift(), 10);

solution(T, input);

// ------------------------------------------------------------------

function exploreNearField(i, j, array, M, N) {
  let newArray = [...array];
  newArray[i][j] = 0;
  if (i - 1 >= 0 && newArray[i - 1][j] === 1) {
    newArray = exploreNearField(i - 1, j, newArray, M, N);
  }
  if (i + 1 < M && newArray[i + 1][j] === 1) {
    newArray = exploreNearField(i + 1, j, newArray, M, N);
  }
  if (j - 1 >= 0 && newArray[i][j - 1] === 1) {
    newArray = exploreNearField(i, j - 1, newArray, M, N);
  }
  if (j + 1 < N && newArray[i][j + 1] === 1) {
    newArray = exploreNearField(i, j + 1, newArray, M, N);
  }
  return newArray;
}

function exploreField(M, N, K, cases) {
  // 배추밭 2차원 배열 array
  let array = Array.from({ length: M }, () => Array(N).fill(0));
  cases.forEach((cabbage) => {
    const [x, y] = cabbage.split(" ").map(Number);
    array[x][y] = 1;
  });

  // 밭을 차례로 돌면서 배추흰지렁이 마리 수 더하기 + 방문 영역 0으로 표시
  let earthworm = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (array[i][j] === 1) {
        earthworm++;
        array = exploreNearField(i, j, array, M, N);
      }
    }
  }
  console.log(earthworm);
}

function solution(T, input) {
  let current = 0;
  for (let i = 0; i < T; i++) {
    const [M, N, K] = input[current].split(" ").map(Number);
    const cases = input.slice(current + 1, current + 1 + K);
    exploreField(M, N, K, cases);
    current += K + 1;
  }
}