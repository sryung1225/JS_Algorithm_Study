function solution(arr) {
    const answer = [];
    arr.forEach((num, idx) => {
        if(idx === 0){
            answer.push(num);
            return;
        }
        if(answer[answer.length - 1] !== num){
            answer.push(num);
        }
    })
    return answer;
}