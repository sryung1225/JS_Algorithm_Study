function solution(n) {
    let restFibo = [0, 1];
    for(let i=2; i<=n; i++){
        restFibo.push((restFibo[i-2] + restFibo[i-1]) % 1234567);
    }
    return restFibo[n];
}