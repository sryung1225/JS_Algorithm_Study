function solution(sides) {
  sides.sort((a, b) => b - a); // 내림차순 정렬
  let answer = sides[0] < sides[1] + sides[2] ? 1 : 2;
  return answer;
}