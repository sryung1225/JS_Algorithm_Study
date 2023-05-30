function solution(t, p) {
    let answer = 0;
    for(let i=0; i<t.length-p.length+1; i++){
        if(t.slice(i, p.length+i) <= p){
            answer++;
        }
    }
    return answer;
}