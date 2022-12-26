function solution(numbers) {
  let max1 = 0;
  let max2 = 0;
  for(let i of numbers){
    if(i > max1 && i > max2){
      max2 = max1;
      max1 = i;
    } else if (i <= max1 && i > max2){
      max2 = i;
    }
  }
  return max1*max2;
}

// 더 좋은 풀이 : sort 이용해서 정렬하기
// function solution(numbers) {
//   numbers.sort((a,b)=>b-a); // 내림차순 정렬
//   return numbers[0]*numbers[1];
// }