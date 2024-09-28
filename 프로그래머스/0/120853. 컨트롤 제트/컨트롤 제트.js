function solution(s) {
    const answer = [];
    s.split(" ").forEach((c) => {
        if(c === "Z") answer.pop();
        else answer.push(c);
    })
    return answer.reduce((acc, cur) => acc + Number(cur), 0);
}