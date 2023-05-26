function solution(numbers) {
    let answer = numbers.sort((a, b) => {
        a+="";
        b+="";
        return +(b+a) - +(a+b);
    });
    return answer[0] ? answer.join("") : "0";
}