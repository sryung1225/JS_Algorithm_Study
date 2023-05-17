function solution(numLog) {
    let answer = numLog.map((v, i) => {
        if(i === 0) return "";
        else if(numLog[i-1] + 1 === v) return "w";
        else if(numLog[i-1] - 1 === v) return "s";
        else if(numLog[i-1] + 10 === v) return "d";
        else return "a";
    }).join("");
    return answer;
}