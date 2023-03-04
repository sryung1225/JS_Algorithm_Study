function solution(x) {
    let sum = x.toString().split("").reduce((acc, cur) => acc+Number(cur), 0);
    if(x % sum === 0) {
        return true;
    } else {
        return false;
    }
}