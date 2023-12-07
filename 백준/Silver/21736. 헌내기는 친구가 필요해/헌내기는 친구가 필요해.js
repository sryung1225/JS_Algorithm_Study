const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

console.log(solution(N, M, input));

// ------------------------------------------------------------------

function solution(N, M, input) {
  const campus = input.map((row) => row.split(""));
  const queue = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === "I") {
        queue.push([i, j]);
        break;
      }
    }
  }

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let meet = 0;

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (campus[x][y] === "P") meet++;
    for (let [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        campus[nx][ny] !== "X" &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
  return meet === 0 ? "TT" : meet;
}
