// 주어진 배열 시계방향으로 90도 돌리기
function transpose(matrix){
    return matrix.reduce(
        (result, row) => row.map(
            (_, i) => [...(result[i] || []), row[i]]
        ), []);
}
// board :            [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
// transpose(board) : [[0,0,0,4,3],[0,0,2,2,5],[0,1,5,4,1],[0,0,0,4,3],[0,3,1,2,1]]

function solution(board, moves) {
    const stacks = transpose(board).map(row => row.reverse().filter(v => v!==0));
    // console.log(stacks) // ? [[3,4], [5,2,2], [1,4,5,1], [3,4], [1,2,1,3]]
    let answer = 0;
    let bag = [];
    for(let i of moves){
        const pop = stacks[i-1].pop();
        if(!pop) continue;
        if(pop === bag[bag.length-1]){
            bag.pop();
            answer += 2;
            continue;
        }
        bag.push(pop);
    }
    return answer;
}