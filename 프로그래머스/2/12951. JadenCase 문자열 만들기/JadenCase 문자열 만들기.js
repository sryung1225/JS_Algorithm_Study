function solution(s) {
    const answer = [];
    const arr = s.split(" ");
    arr.forEach((str) => {
        let first = str.slice(0, 1).toUpperCase();
        let rest = str.slice(1).toLowerCase();
        answer.push(first+rest);
    })
    return answer.join(" ");
}