function solution(n) {
  let array = [];
  for(let i=1; i<=n; i+=2){
      array[Math.floor(i/2)] = i;
  }
  return array;
}

// 더 좋은 풀이 : push() 이용
// function solution(n) {
//   let array = [];
//   for (let i = 1; i<=n; i+=2) answer.push(i)
//   return array;
// }