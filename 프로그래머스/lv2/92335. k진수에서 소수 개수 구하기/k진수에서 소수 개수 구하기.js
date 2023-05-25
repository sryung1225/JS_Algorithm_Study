function isPrime(n) {
    if(!n || n === 1) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}

function solution(n, k) {
    let arr = n.toString(k).split(0);
    return arr.filter(v => isPrime(+v)).length;
}