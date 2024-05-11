function solution(n) {
    const to2 = n.toString(2);
    const count1 = to2.split("").filter((n) => n === "1").length;
    let answer = n + 1;
    while(1){
        const newTo2 = answer.toString(2);
        const newCount1 = newTo2.split("").filter((n) => n === "1").length;
        if(count1 === newCount1) break;
        answer++;
    }
    return answer;
}