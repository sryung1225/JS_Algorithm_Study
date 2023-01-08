function solution(rsp) {
  let answer = "";
  rsp = [...rsp];
  for (let i of rsp){
    if(i === "2"){
      answer += "0";
    } else if(i === "0"){
      answer += "5";
    } else if(i === "5"){
      answer += "2";
    }
  }
  return answer;
}

// 더 좋은 풀이 : object 활용하기
// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2
//   };
//   let answer = [...rsp].map(v => arr[v]).join("");
//   return answer;
// }