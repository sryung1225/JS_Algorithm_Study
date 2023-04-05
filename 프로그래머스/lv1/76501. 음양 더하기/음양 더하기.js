function solution(absolutes, signs) {
    let answer = 0;
    answer = absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
    return answer;
}