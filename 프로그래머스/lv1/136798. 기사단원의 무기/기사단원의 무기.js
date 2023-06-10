function divi(n){
    if(n === 1)
        return 1;
    let count = 2;
    for(let i=2; i<Math.sqrt(n); i++){
        if(n % i === 0)
            count+=2;
    }
    if(Math.sqrt(n) === Math.floor(Math.sqrt(n)))
        count++;
    return count;
}

function solution(number, limit, power) {
    let answer = 0;
    for(let i=1; i<=number; i++){
        let oriP = divi(i);
        if(oriP > limit)
            answer += power;
        else
            answer += oriP;
    }
    return answer;
}