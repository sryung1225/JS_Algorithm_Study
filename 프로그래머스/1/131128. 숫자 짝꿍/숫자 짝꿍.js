function solution(X, Y) {
    let xArr = X.split("").sort((a, b) => a - b);
    let yArr = Y.split("").sort((a, b) => a - b);
    let answer = "";
    
    while(xArr.length !== 0 && yArr.length !== 0){
        const xLast = xArr[xArr.length - 1];
        const yLast = yArr[yArr.length - 1];
        if(xLast === yLast){
            answer += xArr.pop();
            yArr.pop();
        } else if(xLast > yLast) xArr.pop();
        else yArr.pop();
    }
    
    if(answer.length === 0) return "-1";
    else if (answer[0] == "0") return "0";
    return answer;
}