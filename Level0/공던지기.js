function solution(numbers, k) {
  const answer = numbers[2*(k-1)%numbers.length];
  return answer;
}