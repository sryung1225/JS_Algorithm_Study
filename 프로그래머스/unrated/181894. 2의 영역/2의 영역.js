function solution(arr) {
    let idx = arr.map((v, i) => v === 2 ? i : -1).filter(v => v !== -1);
    // console.log(idx)
    
    if(idx.length === 0){
        return [-1];
    } else {
        return arr.slice(idx[0], idx[idx.length-1]+1);
    }
}