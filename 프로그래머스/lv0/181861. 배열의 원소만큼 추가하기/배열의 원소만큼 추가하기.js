function solution(arr) {
    return arr.reduce((acc, cur) => [...acc, ...new Array(cur).fill(cur)], []);
}