function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 다른 풀이 : split 특성을 활용한 방법
// 만일 str2가 str1 끝에 존재해도 "" 반환되어 ["", "str1"] 이 만들어지기 때문에 length 비교 가능
// function solution(str1, str2) {
//   return str1.split(str2).length > 1 ? 1 : 2
// }