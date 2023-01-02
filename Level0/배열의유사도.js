function solution(s1, s2) {
  let answer = 0;
  for (let i of s1){
    for (let j of s2){
      if(j === i){
        answer++;
      }
    }
  }
  return answer;
}

// 다른 풀이 : filter로 같은 값이 담긴 배열 만들기
// function solution(s1, s2) { // ["a", "b", "c"]	["com", "b", "d", "p", "c"]
//   const arr = s1.filter((x) => s2.includes(x));
// 	 // console.log(arr) // ? ["b","c"]
//   return arr.length;
// }