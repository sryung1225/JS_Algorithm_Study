function solution(n) {
    let answer = n.toString(2).split("").filter((n) => n === "1").length;
    return answer;
}