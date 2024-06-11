function solution(n, left, right) {
    let answer = [];
    for(let i=left; i<=right; i++){
        let a = Math.floor(i / n);
        let b = i % n;
        answer.push(Math.max(a, b) + 1);
    }
    return answer;
}