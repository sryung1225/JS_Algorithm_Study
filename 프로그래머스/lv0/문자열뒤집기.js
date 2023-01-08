function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// 다른 풀이 : 전개 구문 이용
// function solution(my_string) {
//   return [...my_string].reverse().join("");
// }