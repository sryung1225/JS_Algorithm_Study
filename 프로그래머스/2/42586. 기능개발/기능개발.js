function solution(progresses, speeds) {
    let answer = [];
    let day = 0;
    while(progresses.length > 0){
        while(progresses[0] < 100){
            day++;
            progresses = progresses.map((q, idx) => q + speeds[idx]);
        }
        let completed = 0;
        while(progresses[0] >= 100){
            completed++;
            progresses.shift();
            speeds.shift();
        }
        answer.push(completed);
    }
    return answer;
}