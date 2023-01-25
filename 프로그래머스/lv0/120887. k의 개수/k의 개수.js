function solution(i, j, k) {
    let answer = 0;
    
    // i~j까지 숫자를 한자리씩 쪼갠 후 탐색
    for(let x=i; x<=j; x++){
        let arr = x.toString().split("");
        // console.log(arr)
        for(let y of arr){
            if(k == y){
                answer++;
                // console.log(y, answer)
            }
        }
    }
    return answer;
}