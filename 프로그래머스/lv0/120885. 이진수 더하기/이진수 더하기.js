function solution(bin1, bin2) {
    let num1 = parseInt(bin1, 2);
    let num2 = parseInt(bin2, 2);
    let answer = (num1+num2).toString(2);
    return answer;
}