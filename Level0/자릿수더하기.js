function solution(n) {
  let answer = 0;
  for (let i of n.toString()){
    answer += Number(i);
  }
  return answer;
}

// 다른 풀이 : reduce
// function solution(n) {
//   return n.toString().split("").reduce((acc, cur) => acc + Number(cur), 0);
// }