function solution(priorities, location) {
    const queue = [...priorities].map((v, i) => [v, i]);
    const sorted = [...priorities].sort((a, b) => b - a);
    let answer = 0;
    const done = [];
    do {
        const max = sorted[0];
        while(queue[0][0] !== max){
            queue.push(queue.shift());
        }
        done.push(queue.shift());
        sorted.shift();
        answer++;
    } while(done[answer-1][1] !== location)
    return answer;
}