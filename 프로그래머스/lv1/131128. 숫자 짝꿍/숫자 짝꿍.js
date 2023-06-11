function solution(X, Y) {
    let common = "";
    let countX = {};
    for(let v of X){
        countX[v] = (countX[v] || 0) + 1;
    }
    for(let v of Y){
        if(countX[v] > 0){
            countX[v]--;
            common += v;
        }
    }
    if(common === ""){
        return "-1";
    } else if (+common === 0){
        return "0";
    } else {
        return [...common].sort((a, b) => b - a).join("");
    }
}