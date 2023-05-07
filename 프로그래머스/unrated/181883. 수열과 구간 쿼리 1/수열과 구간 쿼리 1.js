function solution(arr, queries) {
    for (let i in queries){
        let [s, e] = queries[i];
        for(let i=s; i<=e; i++) arr[i]++;
    }
    return arr;
}