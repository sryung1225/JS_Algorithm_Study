function solution(arr, queries) {
    for(let j of queries){
        for(let i=j[0]; i<=j[1]; i++){
            if(i % j[2] === 0)
                arr[i] += 1;
        }
    }
    return arr;
}