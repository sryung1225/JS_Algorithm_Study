function solution(board, moves) {
    let answer = 0;
    let size = board.length;
    let bag = [];
    for(let i of moves){
        for(let j=0; j<size; j++){
            if(board[j][i-1]){
                bag.push(board[j][i-1]);
                board[j][i-1] = 0;
                if(bag[bag.length-1] === bag[bag.length-2]){
                    bag = bag.slice(0, bag.length-2);
                    answer += 2;
                }
                j = size;
            } 
        }
    }
    return answer;
}
