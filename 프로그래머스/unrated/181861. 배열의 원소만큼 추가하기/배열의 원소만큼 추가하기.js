function solution(arr) {
    let X = [];
    arr.forEach(v => {
        for(let i=0; i<+v; i++)
            X.push(v);
    })
    return X;
}