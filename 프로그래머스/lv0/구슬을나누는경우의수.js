function factorial(n){
  let result = BigInt(1);
  if(n !== 0){
    for (let i = 1; i <= n; i++) {
      result *= BigInt(i);
    }
  }
  return result;
}
function solution(balls, share) {
  const answer = factorial(balls)/factorial(share)/factorial(balls - share);
  return answer;
}

// 83점으로 일부 케이스를 해결하지 못해 힌트 받음
// 케이스 상, number 타입의 최대 범위인 2^53-1 을 넘어서는 경우가 존재해 에러 발생
// 더 큰 숫자를 안정적으로 불러오는 BigInt 타입을 불러와 에러 해결