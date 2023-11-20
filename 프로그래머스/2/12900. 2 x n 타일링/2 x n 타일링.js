function solution(n) {
    const fibo = Array(n+1).fill(0);
    fibo[0] = 1;
    fibo[1] = 1;
    for(let i=2; i<=n; i++){
        fibo[i] = (fibo[i-2] + fibo[i-1]) % 1000000007;
    }
    return fibo[n];
}

