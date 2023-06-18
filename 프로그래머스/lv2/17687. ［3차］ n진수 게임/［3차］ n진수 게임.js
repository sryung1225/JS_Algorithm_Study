function solution(n, t, m, p) {
    let arr = "";
    for(let i=0; arr.length <= m*t + p; i++){
        arr += i.toString(n).toUpperCase();
    }
    if(p === m) p = 0;
    let answer = [...arr].filter((_, i) => (i+1)%m === p).slice(0, t).join("");
    return answer;
}