function solution(board) {
    let result = 0;
    let n = board.length;
    
    // 완전 탐색
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            // 폭탄이 있는 곳을 탐색 => 주변의 값을 2로 변경해줌
            if(board[i][j] === 1) {
                if(i !== 0   && j !== 0   && board[i-1][j-1] === 0) board[i-1][j-1] = 2;
                if(             j !== 0   && board[i][j-1] === 0) board[i][j-1] = 2;
                if(i !== n-1 && j !== 0   && board[i+1][j-1] === 0) board[i+1][j-1] = 2;
                if(i !== 0                && board[i-1][j] === 0) board[i-1][j] = 2;
                if(i !== n-1              && board[i+1][j] === 0) board[i+1][j] = 2;
                if(i !== 0   && j !== n-1 && board[i-1][j+1] === 0) board[i-1][j+1] = 2;
                if(             j !== n-1 && board[i][j+1] === 0) board[i][j+1] = 2;
                if(i !== n-1 && j !== n-1 && board[i+1][j+1] === 0) board[i+1][j+1] = 2;
            }
        }
    }
    console.log(board);
    board.forEach(a => a.forEach(b => b === 0 ? result++ : null))
    return result
}