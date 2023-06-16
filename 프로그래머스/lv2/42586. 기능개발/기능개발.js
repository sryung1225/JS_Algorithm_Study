function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((v, i) => Math.ceil((100 - v)/speeds[i]));
    let maxDay = days[0];
    let works = 0;
    for(let i=0; i<progresses.length; i++){
        if(days[i] <= maxDay){
            works++;
        } else {
            maxDay = days[i];
            answer.push(works);
            works = 0;
            i--;
        }
    }
    if(works)
        answer.push(works);
    return answer;
}