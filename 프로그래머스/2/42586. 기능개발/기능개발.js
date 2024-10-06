function solution(progresses, speeds) {
    const size = progresses.length;
    const answer = [];
    for(let i=0; i<size; i++){
        const days = Math.ceil((100 - progresses[i]) / speeds[i]);
        let count = 1;
        for(let j=i+1; j<size; j++){
            if(progresses[j] + (speeds[j] * days) >= 100) count++;
            else break;
        }
        answer.push(count);
        i += count - 1;
    }
    return answer;
}