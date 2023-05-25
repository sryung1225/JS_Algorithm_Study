function isPrime(n) {
    n = +n;
    if(n === 1) return false;
    else if (n === 2) return true;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    n.toString(k).split(0).filter(v => v).forEach(v => {
        if(isPrime(v))
            answer++;
    });
    return answer;
}