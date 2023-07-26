function solution(n) {
    const answer = [];
    function hanoi(n, start, end, mid){
        if(n === 1){
            answer.push([start, end]);
            return NaN;
        }
        hanoi(n-1, start, mid, end);
        answer.push([start, end]);
        hanoi(n-1, mid, end, start);
    }
    hanoi(n, 1, 3, 2);
    return answer;
}