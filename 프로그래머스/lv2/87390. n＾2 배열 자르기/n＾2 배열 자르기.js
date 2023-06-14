function solution(n, left, right) {
    let arr = [];
    for(let idx=left; idx<=right; idx++){
        let i = parseInt(idx/n);
        let j = idx%n;
        arr.push(Math.max(i, j)+1);
    }
    return arr;
}