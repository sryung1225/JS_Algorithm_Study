// 약수의 개수 구하기
function divisor(n) {
  let count = 0;
  for (let i=1; i<=n; i++){
    if (n%i === 0){
      count ++;
    }
  }
  return count;
}

// 합성수(약수의 개수가 3개 이상인 수)의 개수 구하기
function solution(n) {
  let compositeNum = 0;
  for (let i=1; i<=n; i++){
    if( divisor(i) >= 3) compositeNum++;
  }
  return compositeNum;
}