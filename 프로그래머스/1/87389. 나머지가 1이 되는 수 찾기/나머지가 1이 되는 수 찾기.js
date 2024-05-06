function solution(n) {
    let answer = 0;
    for(let x=2; x<n; x++){
        if(n % x === 1){
            answer = x;
            break;
        }
    }
    return answer;
}