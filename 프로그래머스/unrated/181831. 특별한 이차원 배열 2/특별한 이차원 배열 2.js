function solution(arr) {
    let countAll = 0;
    let countSame = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            countAll++;
            if(arr[i][j] === arr[j][i])
                countSame++;
        }
    }
    return countAll === countSame ? 1 : 0;
}