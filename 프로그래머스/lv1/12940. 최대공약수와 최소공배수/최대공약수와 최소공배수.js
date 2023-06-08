function gcd(n, m) { // 최대공약수
    return m ? gcd(m, n%m) : n;
}

function lcm(n, m) { // 최소공배수
    return n * m / gcd(n, m);
}

function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}
