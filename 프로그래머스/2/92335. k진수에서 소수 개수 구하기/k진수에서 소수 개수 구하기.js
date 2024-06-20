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
    const memo = {};
    
    arr.forEach((p) => {
        if(p === '') return;
        if(memo[p] === undefined) {
            const check = isPrime(p);
            memo[p] = check;
            if(check) answer++;
        } else {
            if(memo[p]) answer++;
        }
    });
    
    return answer;
}