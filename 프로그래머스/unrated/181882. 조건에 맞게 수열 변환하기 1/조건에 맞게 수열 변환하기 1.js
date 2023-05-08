function solution(arr) {
    return arr.map(v => {
        if(v % 2 === 0 && v >= 50)
            return v / 2;
        else if(v % 2 === 1 && v < 50)
            return v * 2;
        else
            return v;
    });
}