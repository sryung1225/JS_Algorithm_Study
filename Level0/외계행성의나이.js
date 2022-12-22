function solution(age) {
  const planetAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let planetMyAge = [];
  const earthMyAge = age.toString().split("");
  for(let i of earthMyAge){
    planetMyAge.push(planetAge[i]);
  }
  return planetMyAge.join("");
}

// 더 좋은 풀이 : map 활용하고 연산 한 줄로 줄이기
// function solution(age) {
//   return age.toString().split("").map(v => "abcdefghij"[v]).join("");
// }