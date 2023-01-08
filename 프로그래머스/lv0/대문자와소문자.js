function solution(my_string) {
  let answer = "";
  for(let i of my_string){
    if(i === i.toUpperCase()){
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

// 다른 풀이 : map 사용
// function solution(my_string) {
//   let answer = [...my_string].map(v => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("");
//   return answer;
// }