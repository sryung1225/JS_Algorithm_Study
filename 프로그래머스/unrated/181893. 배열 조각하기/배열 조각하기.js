function solution(arr, query) {
    for(let i in query){
        if(i%2 === 0)
            arr = arr.slice(0, query[i]+1);
        else
            arr = arr.slice(query[i]);
    }
    return arr;
}