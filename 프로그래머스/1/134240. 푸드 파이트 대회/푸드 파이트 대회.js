function solution(food) {
    let temp = [];
    food.forEach((f, idx) => {
        for(let i=0; i<Math.floor(f/2); i++){
            temp.push(idx);
        }
    })
    const answer = temp.concat([0]).concat(temp.reverse()).join("");
    return answer;
}