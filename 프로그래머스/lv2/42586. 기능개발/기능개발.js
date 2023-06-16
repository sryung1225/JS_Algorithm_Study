function solution(progresses, speeds) {
    let answer = [];
    for(let i=0; i<progresses.length; i++){
        let days = Math.ceil((100 - progresses[i])/speeds[i]);
        let works = 1;
        for(let j=i+1; j<progresses.length; j++){
            if(progresses[j] + days*speeds[j] >= 100){
                works++;
            } else {
                for(let k=j; k<progresses.length; k++){
                    progresses[k] += days*speeds[k];
                }
                break;
            }
        }
        answer.push(works);
        i += works-1;
    }
    return answer;
}