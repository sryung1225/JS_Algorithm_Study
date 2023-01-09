function solution(keyinput, board) {
    let answer = [0, 0];
    board = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    for(let i of keyinput){
        if(i === "left" && answer[0]>-board[0]) answer[0] -= 1;
        else if(i === "right" && answer[0]<board[0]) answer[0] += 1;
        else if(i === "up" && answer[1]<board[1]) answer[1] += 1;
        else if(i === "down" && answer[1]>-board[1]) answer[1] -= 1;
    }
    return answer;
}