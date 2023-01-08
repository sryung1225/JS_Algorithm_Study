function solution(n, t) {
  let answer = n;
  for(let i=0; i<t; i++){
    answer *= 2;
  }
  return answer;
}

// 다른 풀이 : left shift
// function solution(n, t) {
//   return n << t;
// }