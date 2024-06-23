function solution(n, t, m, p) {
    let num = 0;
    let lists = "";
    while(lists.length <= m * (t - 1) + p){
        const str = num.toString(n).toUpperCase();
        lists += str;
        num++;
    }
    if(m === p) p = 0;
    const answer = lists.split("").filter((_, i) => (i + 1) % m === p);
    return answer.slice(0, t).join("");
}