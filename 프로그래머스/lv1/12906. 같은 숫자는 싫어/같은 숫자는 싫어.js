function solution(arr) {
    let answer = [];
    for(let i of arr){
        // console.log(answer.slice(-1)[0]);
        if(answer.slice(-1)[0] !== i)
            answer.push(i);
    }
    return answer;
}