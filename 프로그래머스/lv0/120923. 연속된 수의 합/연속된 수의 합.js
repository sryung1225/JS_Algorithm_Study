function solution(num, total) {
    let answer = [];
    let x = (2*total - num*num + num)/(2*num);
    for(let i=0; i<num; i++){
        answer.push(x+i);
    }
    return answer;
}