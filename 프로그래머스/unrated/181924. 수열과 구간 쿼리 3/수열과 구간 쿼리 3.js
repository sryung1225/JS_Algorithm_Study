function solution(arr, queries) {
    let tmp = 0;
    for(let i of queries){
        tmp = arr[i[0]];
        arr[i[0]] = arr[i[1]];
        arr[i[1]] = tmp;
    }
    return arr;
}