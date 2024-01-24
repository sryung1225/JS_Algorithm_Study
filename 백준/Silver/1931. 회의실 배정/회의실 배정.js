const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

console.log(solution(N, input));

// ------------------------------------------------------------------
// 매 선택에서 지금 당장 최적의 선택을 하는 방식 : Greedy(탐욕법)
// 회의 종료시간 순으로 정렬한 뒤, 가장 빨리 끝나는 회의를 선택해 진행 -> 남은 시간 회의 중 가장 빨리 끝나는 회의를 선택해 진행 -> ...

function solution(N, input) {
  // 회의 정렬
  const graph = [...input].map((v) => v.split(" ").map(Number));
  graph.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  }); // 회의 종료시간 asc + 회의 시작시간 asc

  // 정렬된 회의를 방문하며 최적의 회의 선택
  const answer = [graph[0]];
  for (let i = 1; i < N; i++) {
    const current = answer[answer.length - 1][1];
    if (current > graph[i][0]) continue;
    else {
      answer.push(graph[i]);
    }
  }
  return answer.length;
}
