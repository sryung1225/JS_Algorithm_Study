function solution(arr, flag) {
    return arr.reduce((acc, cur, i) => 
                     flag[i]
                     ? [...acc, ...new Array(cur*2).fill(cur)]
                     : acc.slice(0, -cur)
                     , []);
}