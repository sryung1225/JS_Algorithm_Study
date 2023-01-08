function solution(money) {
  let answer = [];
  answer.push(Math.floor(money/5500));
  answer.push(money%5500);
  return answer;
}

// 참고 풀이 : double tilde로 Math.floor를 대신하기
function solution(money) {
  const answer = [~~(money/5500), money%5500];
  return answer;
}