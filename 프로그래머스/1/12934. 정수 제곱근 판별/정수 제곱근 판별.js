function solution(n) {
    let answer = 0;
    if(Math.sqrt(n) % 1 === 0){
        answer = (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
    } else {
        answer = -1;
    }
    return answer;
}