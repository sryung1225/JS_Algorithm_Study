function solution(n) {
    let arr = [];
    let num = 0;
    while(arr.length !== n && ++num){
		if(num%3 !== 0 && !(''+num).includes('3')){
			arr.push(num);
		}
	}
  return arr.pop(); // 마지막 num 반환
}