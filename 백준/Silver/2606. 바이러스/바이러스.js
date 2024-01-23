const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());

console.log(solution(N, input));

function solution(N, input) {
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
    graph[node]?.forEach((neighbor) => {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    });
  }
  dfs(1);

  const answer = visited.reduce((acc, cur) => (cur ? acc + cur : acc), -1);
  return answer;
}