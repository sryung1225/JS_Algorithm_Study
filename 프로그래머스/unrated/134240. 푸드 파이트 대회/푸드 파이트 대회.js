function solution(food) {
    let answer = "";
    for(let i=1; i<food.length; i++){
        let count = Math.floor(food[i]/2);
        answer += (i+"").repeat(count);
    }
    return answer + "0" + [...answer].reverse().join("");
}