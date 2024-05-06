function solution(x) {
    let answer = x % (x.toString().split("").reduce((acc, cur) => acc + Number(cur), 0));
    if(answer === 0) return true;
    else return false;
}