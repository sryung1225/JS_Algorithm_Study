function solution(s) {
  let answer = 0;
  let array = s.split(" ");
  for (let i=0; i<array.length; i++){
    if(array[i] === "Z"){
      answer -= Number(array[i-1]);
    } else {
      answer += Number(array[i]);
    }
  }
  return answer;
}

// 다른 풀이 : for...of로 배열 내부를 돌면서 pop/push
// function solution(s) {
//   s = s.split(" ");
//   let arr = [];
//   for (let v of s) 
// 		v === "Z" ? (arr.length ? arr.pop() : "") : arr.push(v);
//   return arr.reduce((a,v)=>a+ +v,0);
// }