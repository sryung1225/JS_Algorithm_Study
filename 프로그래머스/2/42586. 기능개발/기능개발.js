function solution(progresses, speeds) {
    const size = progresses.length;
    const answer = [];
    const daysLeft = [...progresses].map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    for(let i=0; i<size; i++){
        const maxDays = daysLeft[i];
        let count = 1;
        for(let j=i+1; j<size; j++){
            if(maxDays >= daysLeft[j]) count++;
            else break;
        }
        answer.push(count);
        i += count - 1;
    }
    return answer;
}