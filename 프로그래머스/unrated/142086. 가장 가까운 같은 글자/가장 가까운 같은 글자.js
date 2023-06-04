function solution(s) {
    let answer = [];
    let arr = [];
    [...s].forEach((v, i) => {
        if(arr.includes(v)){
            answer.push(i - arr.lastIndexOf(v));
        } else {
            answer.push(-1);
        }
        arr.push(v);
    })
    return answer;
}