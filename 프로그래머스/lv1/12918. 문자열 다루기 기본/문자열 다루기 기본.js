function solution(s) {
    let arr = s.split("").filter(a => isNaN(Number(a)) === false);
    if(arr.length === s.length && (s.length === 4 || s.length === 6)){
        return true;
    } else {
        return false;
    }
}