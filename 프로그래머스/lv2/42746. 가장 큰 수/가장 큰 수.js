function solution(numbers) {
    if(numbers.reduce((acc, cur) => acc + cur, 0) === 0) 
        return "0";
    return numbers.sort((a, b) => {
        a+="";
        b+="";
        return +(b+a) - +(a+b);
    }).join("");
}