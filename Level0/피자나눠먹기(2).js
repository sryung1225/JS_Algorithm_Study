function solution(n) {
  let pizza = 0;
  const piece = 6;
  // 피자 조각 수 6과 인원 n의 최대공약수 구하기
  const min = piece > n ? n : piece;
  let gcd = 1;
  for(let i=1; i<=min; i++){
    if(piece % i === 0 && n % i === 0){
      gcd = i;
    }
  }
  // 피자 판 수 = 인원 / 최대 공약수
  pizza = n / gcd;
  return pizza;
}


// 더 좋은 풀이 : while 반복문 이용하면서 직관적인 계산하기
// const solution = (n) => {
//   let piece = 6;
//   while(true) {
//     if (piece % n === 0) {
//       break
//     }
//     piece += 6
//   }
//   return piece / 6
// }