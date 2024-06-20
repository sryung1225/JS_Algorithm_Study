function isPrime(num) {
    const sqrtNum = Math.sqrt(num);
    
    if(Number.isInteger(sqrtNum)) return false;
    for(let i=2; i<sqrtNum; i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const num = n.toString(k);
    const arr = num.split("0").map(Number);
    
    let answer = 0;
    
    arr.forEach((p) => {
        if(p === '') return;
        if(isPrime(p)) answer++;
    });
    
    return answer;
}