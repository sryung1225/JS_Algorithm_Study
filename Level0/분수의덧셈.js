function solution(denum1, num1, denum2, num2) {
  // 덧셈
  let topNum = denum1*num2 + num1*denum2;
  let botNum = num1*num2;

  // 분모와 분자 중 더 작은 값을 min으로
  const min = topNum > botNum ? botNum : topNum;
  // 최대공약수 max
  let max = 1;

  // 분모, 분자가 나누어지는 최대 공약수 계산
  for (let i=2; i<=min; i++){
    if (topNum % i === 0 && botNum % i === 0){
      max = i;
    }
  }
  const answer = [topNum/max, botNum/max];
  return answer;
}