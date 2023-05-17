function solution(start, end) {
    return Array(start-end+1).fill(start).map((v, i) => v-i);
}