function solution(lines) {
    let maxNum = Math.max(lines[0][1], lines[1][1], lines[2][1]);
    let minNum = Math.min(lines[0][0], lines[1][0], lines[2][0]);
    let arr = new Array(Number(maxNum - minNum));
    
    let answer = 0;
    for(let i of lines){
        for(let j=i[0]-minNum; j<i[1]-minNum; j++){
            if(arr[j] == null) arr[j] = "*";
            else if(arr[j] === "*") arr[j] = "**";
        }
    }
    for(let x of arr){
        if(x === "**") answer ++;
    }
    return answer;
}