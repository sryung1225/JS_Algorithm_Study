function solution(n, words) {
    let answer = 0;
    words.reduce((acc, cur, i) => {
        if(acc !== cur[0] || words.slice(0, i).indexOf(cur) !== -1)
            answer = answer || i;
        return cur[cur.length-1];
    }, "");
    return answer ? [answer%n+1, Math.ceil((answer+1)/n)] : [0, 0];
}