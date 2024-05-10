function divisor(num) {
    if(num === 1) return 1;
    let count = 2;
    for(let i=2; i<Math.sqrt(num); i++){
        if(num % i === 0) count+=2;
    }
    if(Math.sqrt(num) % 1 === 0) count++;
    return count;
}

function solution(number, limit, power) {
    let answer = 0;
    for(let i=1; i<=number; i++){
        const count = divisor(i);
        answer += limit < count ? power : count;
    }
    return answer;
}