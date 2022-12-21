function solution(n, k) {
  const pay = n*12000 + (k - Math.floor(n/10))*2000;
  return pay;
}

// 다른 풀이 : double tilde를 Math.floor로 이용하는 방식
// function solution(n, k) {
// 	const pay = n*12000 + (k - ~~(n/10))*2000;
// 	return pay;
// }