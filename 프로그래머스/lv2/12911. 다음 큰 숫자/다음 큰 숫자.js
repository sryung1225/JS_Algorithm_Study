function solution(n) {
    let answer = n+1;
    const count1 = n.toString(2).split("0").join("").length;
    while(true){
        let count2 = answer.toString(2).split("0").join("").length;
        if(count1 === count2){
            return answer;
        } else {
            answer++;
        }
    }
}