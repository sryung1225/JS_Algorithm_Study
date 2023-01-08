function solution(age) {
  return 2022 - age + 1;
}

// 더 좋은 풀이 : 현재년도가 2022로 주어지지 않고 받아와야 하는 경우
function solution(age) {
  return new Date().getFullYear() - age + 1;
}