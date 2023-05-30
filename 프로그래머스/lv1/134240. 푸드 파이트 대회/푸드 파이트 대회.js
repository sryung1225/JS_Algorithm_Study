function solution(food) {
    let player1 = [];
    let repeat = 0;
    for(let i=1; i<food.length; i++){
        if(food[i] > 1){
            repeat = Math.floor(food[i]/2);
            for (let j = 0; j < repeat; j++){
                player1.push(i)
            }
        }
    }
    let player2 = [...player1].reverse();
    player1.push(0);
    return player1.concat(player2).join("");
}