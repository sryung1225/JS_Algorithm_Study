function solution(array) {
  let answer = 0;
  for (let i of array.join("")){
    if(i === "7") answer += 1;
  }
  return answer;
}