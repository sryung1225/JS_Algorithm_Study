function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function solution(arr){
    return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}