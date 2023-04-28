function solution(arr, queries) {
    for(let i of queries){
        [arr[i[0]], arr[i[1]]] = [arr[i[1]], arr[i[0]]];
    }
    return arr;
}