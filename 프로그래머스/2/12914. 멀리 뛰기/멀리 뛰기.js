let fibo = [1, 1];
function solution(n) {
    if(fibo.length > n) return fibo[n];
    for(let i=fibo.length; i<=n; i++) {
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567;
    }
    return fibo[n];
}