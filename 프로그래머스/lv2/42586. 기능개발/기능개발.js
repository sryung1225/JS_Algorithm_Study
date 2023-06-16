function solution(progresses, speeds) {
    let answer = [];
    while(speeds.length){
        speeds.forEach((v, i) => {
            if(progresses[i] < 100)
                progresses[i] += v;
        })
        let works = 0;
        while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            works++;
        }
        if(works > 0)
            answer.push(works);
    }
    return answer;
}