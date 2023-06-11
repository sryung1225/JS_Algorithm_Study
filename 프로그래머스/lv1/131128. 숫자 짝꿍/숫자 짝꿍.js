function solution(X, Y) {
    let common = "";
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
            common += v;
        }
    });
    if(common === "")
        return "-1";
    else if (+common === 0)
        return "0";
    else
        return [...common].sort((a, b)=> b - a).join("");
}