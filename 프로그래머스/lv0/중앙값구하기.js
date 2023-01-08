function solution(array) {
  // 오름차순 정렬
  let tmp = 0;
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      if (array[i] > array[j]){
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        }
    }
  }
  // [9, -1, 0]
  // i=0 j=1 [0]=-1 [1]=9 [-1, 9, 0]
  // i=0 j=2
  // i=1 j=2 [1]=0 [2]=9
  
  // 중앙값 구하기
  const centerNum = array[(array.length-1)/2];
  return centerNum;
}

// 더 좋은 풀이 : array.sort(a, b) 이용
// function solution(array) {
//   // 오름차순 정렬
//   array.sort((a, b) => a - b);
//   // 중앙값 구하기
//   const centNum = array[Math.floor(array.length/2)];
//   return centNum;
// }