// 계산을 도중에 끊기 용이하도록 소수 확인 함수를 분리
function isPrime(x) {
    let end = Math.sqrt(x); // 최적화 위해서 제곱근까지만 계산
    for(let i=2; i<=end; i++){
        if(x%i === 0) return false;
    }
    return true;
}

function solution(n) {
    let answer = 0;
    for(let i=2; i<=n; i++){
        if(isPrime(i)) answer++;
    }
    return answer;
}