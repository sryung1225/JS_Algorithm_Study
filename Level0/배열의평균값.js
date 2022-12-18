function solution(numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return average;
}