function solution(l, r) {
    let answer = [];
    let tmp = [];
    let n = 0;
    for(let i=l; i<=r; i++){
        tmp = i.toString().split("");
        n = tmp.filter(a => a === "0" || a === "5");
        if(n.length === tmp.length) answer.push(i);
    }
    return answer.length === 0 ? [-1] : answer;
}