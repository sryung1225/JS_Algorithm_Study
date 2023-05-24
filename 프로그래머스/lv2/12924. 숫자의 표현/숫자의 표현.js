function solution(n) {
    // n의 공약수 중 홀수 계산하기
    let answer = 0;
    for(let i=1; i<=n; i++){
        if(n%i === 0 && i%2 === 1){
            answer++;
        }
    }
    return answer;
}