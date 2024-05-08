function gcd(n, m) {
    return m ? gcd(m, n%m) : n;
}

function lcm(n, m) {
    return n*m/gcd(n, m);
}

function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}