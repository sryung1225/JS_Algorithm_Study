function solution(n) {
    let answer = n+1;
    const count1 = n.toString(2).match(/1/g).length;
    while(true){
        let count2 = answer.toString(2).match(/1/g).length;
        if(count1 === count2){
            return answer;
        } else {
            answer++;
        }
    }
}