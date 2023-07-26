function solution(n) {
    const answer = [];
    function hanoi(n, start, end, mid){
        if(n === 1){ // 원판 갯수가 1개이면 끝으로 바로 옮김 (종료)
            answer.push([start, end]);
        } else {
            hanoi(n-1, start, mid, end); // 가장 밑 원판 외 원판들을 중간으로 이동
            answer.push([start, end]);
            hanoi(n-1, mid, end, start); // 중간으로 이동한 원판들을 목표 위치로 이동
        }
    }
    hanoi(n, 1, 3, 2);
    return answer;
}