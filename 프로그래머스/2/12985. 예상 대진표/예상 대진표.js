function solution(n, a, b) {
    let answer = 1;
    let numA = Math.min(a, b);
    let numB = Math.max(a, b);
    for(let i=1; i<=n; i*=2){
        if(numB % 2 === 0 && numB - numA === 1) break;
        answer++;
        numA = Math.ceil(numA / 2);
        numB = Math.ceil(numB / 2);
    }
    return answer;
}