function solution(board, moves) {
    const newBoard = [];
    for(let i=0; i<board.length; i++){
        const row = [];
        for(let j=board[i].length - 1; j>=0; j--){
            const doll = board[j][i];
            if(doll) {
                row.push(doll);
            }
        }
        newBoard.push(row);
    }
    
    let answer = 0;
    const stack = [];
    moves.forEach((move) => {
        if(newBoard[move - 1].length > 0){
            const doll = newBoard[move - 1].pop();
            if(stack[stack.length - 1] === doll){
                stack.pop();
                answer += 2;
            } else {
                stack.push(doll);
            }
        }
    })
    return answer;
}