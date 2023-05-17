function solution(board, k) {
    return board.reduce((sum, row, i) => {
        return sum + row.reduce((rowSum, column, j) => {
            return i+j <= k ? rowSum + column : rowSum;
        }, 0);
    }, 0);
}