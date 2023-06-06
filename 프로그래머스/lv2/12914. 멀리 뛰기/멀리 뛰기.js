function solution(n) {
    // 동적 계획법(Dynamic Programming) 사용
    // 마지막에 1칸 뛸지 2칸 뛸지를 결정하는데 관건
    // n개의 칸에서 끝에 도달하는 방법의 가짓 수 = n-1개의 칸~~ + n-2개의 칸~~ : 피보나치
    let dp = new Array(n+1);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i=2; i<=n; i++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    
    return dp[n];
}

// ex) n=5
// 11111 2111 1211 1121 1112 221 212 122 : result=8
// dp = [1, 1, 2, 3, 5, 8]
// result = dp[5] = 8