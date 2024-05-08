function solution(arr) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);
    const answer = arr.slice(0, idx).concat(arr.slice(idx+1));
    return answer.length > 0 ? answer : [-1];
}