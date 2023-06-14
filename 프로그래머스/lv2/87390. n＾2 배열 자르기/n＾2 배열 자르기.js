function solution(n, left, right) {
    let arr = new Array(right-left+1).fill(0).reduce((acc, _, idx) => {
        let i = parseInt((idx+left)/n);
        let j = (idx+left)%n;
        acc.push(Math.max(i, j)+1);
        return acc;
    }, []);
    return arr;
}

// 02 10 11 12 //
//  2  3  4  5 // idx+left
//  0  1  2  3 // idx
// [3, 2, 2, 3]