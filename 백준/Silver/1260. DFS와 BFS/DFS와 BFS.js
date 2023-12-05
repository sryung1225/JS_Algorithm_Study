const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, V] = input.shift().split(" ").map(Number);

console.log(solution(N, M, V, input));

// ------------------------------------------------------------------

function solution(N, M, V, input) {
  // graph: 정점 i와 연결된 정점의 수 graph[i]
  let graph = new Array(N + 1);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < M; i++) {
    let [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }
  graph.forEach((element) => {
    element.sort((a, b) => a - b);
  });

  let visited = new Array(N + 1).fill(0);
  let dfsResult = [];

  function dfs(v) {
    if (visited[v]) return;
    visited[v] = 1;
    dfsResult.push(v);
    for (let i = 0; i < graph[v].length; i++) {
      let next = graph[v][i];
      if (visited[next] === 0) {
        dfs(next);
      }
    }
  }
  dfs(V);

  let bfsResult = [];
  visited.fill(0);
  function bfs(v) {
    let queue = [v];
    while (queue.length) {
      let x = queue.shift();
      if (visited[x] === 1) {
        continue;
      }
      visited[x] = 1;
      bfsResult.push(x);
      for (let i = 0; i < graph[x].length; i++) {
        let next = graph[x][i];
        if (visited[next] === 0) {
          queue.push(next);
        }
      }
    }
  }
  bfs(V);

  return `${dfsResult.join(" ")}\n${bfsResult.join(" ")}`;
}