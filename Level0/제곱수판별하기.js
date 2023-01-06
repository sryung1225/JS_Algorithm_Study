// function solution(n) {
//   let answer = 2;
//   for(let i = 1; i<n; i++){
//     if(Math.pow(i, 2) === n){
//       answer = 1;
//       break;
//     }
//   }
//   return answer;
// }
// 통과는 했지만 성능이슈 있음

// 더 좋은 풀이 : Math.sqrt + Number.isInteger
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}