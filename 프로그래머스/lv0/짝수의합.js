function solution(n) {
  let evensum = 0;
  for(let i=1; i<=n; i++){
    i%2 === 0 ? evensum += i : 0;
  }
  return evensum;
}