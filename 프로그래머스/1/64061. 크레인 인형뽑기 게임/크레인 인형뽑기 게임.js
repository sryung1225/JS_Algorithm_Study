function solution(board, moves) {
    let answer = 0;
    let basket = [];
    moves.forEach((num) => {
        for(let i=0; i<board.length; i++){
            if(board[i][num-1] !== 0){
                basket.push(board[i][num-1]);
                board[i][num-1] = 0;
                break;
            }
        }
        if(basket.length > 0 && basket[basket.length - 1] === basket[basket.length - 2]){
            answer += 2;
            basket.splice(-2);
        }
    })
    return answer;
}