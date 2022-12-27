function solution(n) {
  let answer = [];

  // 소인수분해하기
  let i = 2;
  while(i <= n){
    if (n % i === 0){
      answer.push(i);
      n /= i;
      i = 2;
    } else {
      i++;
    }
  }
  // 중복 값 제거하기
  answer = [...new Set(answer)];
  
  return answer;
}