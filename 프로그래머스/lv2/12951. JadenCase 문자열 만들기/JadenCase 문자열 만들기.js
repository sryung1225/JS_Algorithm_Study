function solution(s) {
    return s.split(" ").map(v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
}