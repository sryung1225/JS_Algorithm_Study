let F = [0, 1];

function solution(n) {
    if(F.length > n) return F[n];
    for(let i=F.length; i<=n; i++) {
        F[i] = (F[i-2] + F[i-1]) % 1234567;
    }
    return F[n];
}