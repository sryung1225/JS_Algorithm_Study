function solution(numLog) {
    let answer = '';
    for(let i=0; i<numLog.length; i++){
        switch(numLog[i+1] - numLog[i]){
            case 1:
                answer += "w";
                break;
            case -1:
                answer += "s";
                break;
            case 10:
                answer += "d";
                break;
            case -10:
                answer += "a";
        }
    }
    return answer;
}