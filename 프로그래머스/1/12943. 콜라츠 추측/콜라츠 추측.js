function solution(num) {
    let answer = 0;
    while(num !== 1){
        if(answer === 499) {
            answer = -1;
            break;
        }
        answer++;
        if(num % 2 === 0) num /= 2;
        else num = num*3 + 1;
    }
    return answer;
}