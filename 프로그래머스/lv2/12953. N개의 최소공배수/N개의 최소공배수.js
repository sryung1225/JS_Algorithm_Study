function gcd(a, b) {
    // 두 수의 최대공약수를 구하는 함수
    return a % b !== 0 ? gcd(b, a%b) : b;
}

function solution(arr){
    return arr.reduce((a,b) => {
        // console.log(a, b, a*b, gcd(a,b), a*b/gcd(a,b));
        return a*b/gcd(a,b);
    }, 1);
}