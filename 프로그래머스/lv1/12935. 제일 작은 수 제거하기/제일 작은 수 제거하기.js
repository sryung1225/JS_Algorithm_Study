function solution(arr) {
    let min = Math.min(...arr);
    let answer = arr.filter(v => v !== min).length === 0 ? [-1] : arr.filter(v => v !== min);
    return answer;
}