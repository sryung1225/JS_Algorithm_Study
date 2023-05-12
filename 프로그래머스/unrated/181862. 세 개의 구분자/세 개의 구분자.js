function solution(myStr) {
    let answer = [];
    let tmp = "";
    [...myStr].forEach(v => {
        if(v !== "a" && v !== "b" && v !== "c"){
            tmp += v;
        } else {
            answer.push(tmp);
            tmp = "";
        }
    })
    answer.push(tmp);
    answer = answer.filter(v => v);
    if(answer.length === 0){
        return ["EMPTY"];
    } else {
        return answer;
    }
}