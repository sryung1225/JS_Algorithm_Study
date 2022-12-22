function solution(numbers, num1, num2) {
  const answer = [];
  for (let i=num1; i<=num2; i++){
    answer.push(numbers[i]);
  }
  return answer;
}

// 더 좋은 풀이 : slice() 메서드 적절하게 사용하기
// function solution(numbers, num1, num2) {
//   return numbers.slice(num1, num2 + 1);
// }