function solution(n) {
  return [...Array(n*3)] // n*3 크기의 [null, null, ... , null]
    .map((_, i) => i+1) // [1, 2, 3, ... , n*3]
    .filter(num => num % 3 !== 0 && !num.toString().includes("3")) // 조건에 해당되지 않는 요소들로 배열 필터링
    [n-1]; // n번째 요소 반환
}