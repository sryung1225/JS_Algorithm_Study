function destroy(h, w, arr) {
    let check = [];
    for(let i=0; i<h-1; i++){
        for(let j=0; j<arr[i].length-1; j++){
            const B = arr[i][j];
            if(arr[i+1][j] === B && arr[i][j+1] === B && arr[i+1][j+1] === B){
                check.push(`${i},${j}`);
                check.push(`${i+1},${j}`);
                check.push(`${i},${j+1}`);
                check.push(`${i+1},${j+1}`);
            }
        }
    }
    check = [...new Set(check)];
    arr = arr.map(v => v.split(""));
    check.forEach(v => {
        let [x, y] = v.split(",");
        arr[x][y] = "";
    })
    return [check.length, arr.map(v => v.join(""))];
}

function solution(m, n, board) {
    // 블록을 시계방향으로 90도 회전
    let rotate = [];
    for(let i=0; i<n; i++){
        rotate[i] = "";
        for(let j=0; j<m; j++){
            rotate[i] += board[m-1-j][i];
        }
    }
    // 삭제 블록 탐지
    let answer = 0;
    let newBlock = [0, []];
    do {
        newBlock = destroy(n, m, rotate);
        answer += newBlock[0];
        rotate = newBlock[1];
    } while(newBlock[0] > 0)
    return answer;
}