function solution(s) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let answer = "";
    let temp = "";
    for(let i of s){
        if(isNaN(Number(i))) temp += i;
        else {
            answer += i.toString();
            continue;
        }
        if(arr.includes(temp)){
            answer += arr.indexOf(temp).toString();
            temp = "";
        }
    }
    
    return Number(answer);
}