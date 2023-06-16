function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((v, i) => Math.ceil((100 - v)/speeds[i]));
    let maxDay = days[0];
    for(let i=0, j=0; i<progresses.length; i++){
        if(days[i] <= maxDay){
            answer[j]++;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    return answer;
}