function solution(X, Y) {
    let common = [];
    let countX = {};
    [...X].forEach(v => {
        if(!countX[v])
            countX[v] = 1;
        else
            countX[v]++;
    });
    [...Y].forEach(v => {
        if(countX[v] > 0){
            countX[v]--;
            common.push(v);
        }
    });
    if(common.length === 0){
        return "-1";
    } else {
        let answer = common.sort((a, b) => b - a);
        return common[0] === "0" ? "0" : answer.join("");
    }
}