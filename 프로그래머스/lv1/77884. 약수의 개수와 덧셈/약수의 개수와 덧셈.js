function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        // 제곱근이 정수면 약수의 개수가 홀수다
        // EX) 16의 제곱근 4 => 16의 약수 1,2,4,8,16
        if(Number.isInteger(Math.sqrt(i))){
            answer -= i;
        } else {
            answer += i;
        } 
    }
    return answer;
}