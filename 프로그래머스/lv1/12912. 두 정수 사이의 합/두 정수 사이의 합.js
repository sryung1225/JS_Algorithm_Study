function solution(a, b) {
    let answer = 0;
    let scope = { min: 0, max: 0};
    if(a < b) {
        scope.min = a;
        scope.max = b;
    } else {
        scope.min = b;
        scope.max = a;
    }
    for(let i=scope.min; i<=scope.max; i++){
        answer += i;
    }
    return answer;
}