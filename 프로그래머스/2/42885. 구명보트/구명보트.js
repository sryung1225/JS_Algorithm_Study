function solution(people, limit) {
    const weights = [...people].sort((a, b) => a - b);
    let answer = 0;
    while(weights.length > 0){
        const heavy = weights.pop();
        const light = weights[0];
        if(heavy + light <= limit){
            weights.shift();
        }
        answer++;
    }
    return answer;
}