function solution(arr, idx) {
    arr = arr.slice(idx);
    if(arr.indexOf(1) !== -1)
        return arr.indexOf(1)+idx;
    else
        return -1;
}