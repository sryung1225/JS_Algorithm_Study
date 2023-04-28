function solution(arr, queries) {
    let answer = [];
    let num = 0;
    let res = [];
    for(let i of queries){
        for(let j=i[0]; j<=i[1]; j++){
            if(arr[j] > i[2])
                res.push(arr[j]);
        }
        if(res.length === 0) answer.push(-1);
        else answer.push(Math.min(...res));
        res = [];
    }
    return answer;
}