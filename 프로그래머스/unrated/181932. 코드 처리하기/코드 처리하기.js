function solution(code) {
    let ret = '';
    const arr = code.split("");
    let mode = 0;
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx] === "1" && mode === 0) mode = 1;
        else if(arr[idx] === "1" && mode === 1) mode = 0;
        else if(mode === 0 && idx % 2 === 0) ret += arr[idx];
        else if(mode === 1 && idx % 2 === 1) ret += arr[idx];
    }
    return ret.length === 0 ? "EMPTY" : ret;
}