function solution(n, t, m, p) {
    let arr = "";
    let i=0;
    while(arr.length < m*t){
        arr += i.toString(n).toUpperCase();
        i++;
    }
    if(p === m) p = 0;
    let answer = [...arr].filter((_, i) => (i+1)%m === p).slice(0, t).join("");
    return answer;
}