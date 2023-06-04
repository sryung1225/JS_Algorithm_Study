function solution(s) {
    let answer = [];
    [...s].forEach((v, i) => {
        if(s.slice(0, i).includes(v)){
            answer.push(i - s.slice(0, i).lastIndexOf(v));
        } else {
            answer.push(-1);
        }
    })
    return answer;
}