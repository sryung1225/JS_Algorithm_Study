function factorial(n){
  let answer = 1;
  for(let i=1; i<=n; i++){
    answer *= i;
  }
  return answer;
}
function solution(n) {
  let answer = 0;
  for (let j=1; j<=10; j++){
    if(factorial(j) > n) {
      answer = j-1;
      break;
    }
  }
  return answer;
}