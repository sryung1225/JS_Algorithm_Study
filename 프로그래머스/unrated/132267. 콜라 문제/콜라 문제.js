function solution(a, b, n) {
    let answer = 0;
    while(n >= a){
        let sell = Math.floor(n/a);
        answer += sell*b;
        n = n - sell*a + sell*b;
    }
    return answer;
}