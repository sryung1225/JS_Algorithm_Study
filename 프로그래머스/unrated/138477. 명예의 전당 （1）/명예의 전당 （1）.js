function solution(k, score) {
    let scores = [];
    let answer = [];
    for(let i=0; i<score.length; i++){
        scores.push(score[i]);
        scores = scores.sort((a, b) => b - a).slice(0, k);
        answer.push(scores[scores.length-1]);
    }
    return answer;
}