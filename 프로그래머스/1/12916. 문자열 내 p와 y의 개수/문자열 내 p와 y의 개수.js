function solution(s){
    const arr = s.split("");
    let [countP, countY] = [0, 0];
    arr.forEach(word => {
        if(word === "P" || word === "p"){
            countP++;
        } else if(word === "Y" || word === "y"){
            countY++;
        }
    })
    if(countP === countY) return true;
    else return false;
}