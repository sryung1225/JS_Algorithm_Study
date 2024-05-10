function solution(dartResult) {
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    let answer = 0;
    let [prev, now] = [0, 0];
    
    const dartArr = dartResult.split("");
    for(let i=0; i<dartArr.length; i++){
        const dart = dartArr[i];
        if(dart === '1' && dartArr[i+1] === '0') {
            answer += prev;
            prev = now;
            now = 10;
            i++;
        } else if(!isNaN(Number(dart))) {
            answer += prev;
            prev = now;
            now = Number(dart);
        } else if(bonus[dart]) {
            now = Math.pow(now, bonus[dart]);
        } else if(dart === "*") {
            now *= 2;
            prev *= 2;
        } else if(dart === "#") {
            now -= now*2;
        }
    }
    answer += prev + now;
    return answer;
}