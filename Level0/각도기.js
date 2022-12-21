function solution(angle) {
  if (angle > 0 && angle < 90){ return 1 }
  else if (angle === 90){ return 2 }
  else if (angle > 90 && angle < 180){ return 3 }
  else if (angle === 180){ return 4 }
}

// 더 좋은 풀이 : 삼항연산자
// function solution(angle) {
//   return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }

// 좋은 접근 방식 풀이 : array.filter
// function solution(angle) {
//   return [0, 90, 91, 180].filter(x => angle>=x).length;
// }