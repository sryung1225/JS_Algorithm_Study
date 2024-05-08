function solution(t, p) {
    let answer = 0;
    for(let i=0; i<=t.length - p.length; i++){
        const str = t.slice(i, i+p.length);
        if(Number(str) <= Number(p)) answer++;
    }
    return answer;
}