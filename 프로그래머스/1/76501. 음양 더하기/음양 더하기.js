function solution(absolutes, signs) {
    let answer = absolutes.reduce((acc, cur, index) => {
        if(signs[index]) return acc + cur;
        else return acc - cur;
    }, 0);
    return answer;
}