function solution(k, score) {
    let answer = [];
    let winner = [];
    score.forEach((s, i) => {
        if(i < k) {
            winner.push(s);
        } else if(winner[k-1] < s){
            winner.pop();
            winner.push(s);
        }
        winner.sort((a, b) => b - a);
        answer.push(winner[winner.length-1]);
    })
    return answer;
}