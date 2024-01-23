const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const virus = Number(input.shift());

console.log(solution(N, virus, input));

function solution(N, virus, input) {
  const graph = {};
  input.forEach((line) => {
    const [a, b] = line.split(" ").map(Number);
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });

  const visited = new Array(N + 1).fill(false);
  function dfs(node) {
    visited[node] = true;
    if (!graph[node]) return;
    graph[node].forEach((neighbour) => {
      if (!visited[neighbour]) {
        dfs(neighbour);
      }
    });
  }
  dfs(1);

  const answer = visited.filter((v) => v === true).length - 1;
  return answer;
}
