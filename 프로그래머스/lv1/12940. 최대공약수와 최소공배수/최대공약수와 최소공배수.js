function gcf(n, m) { // 최대공약수
    return m ? gcf(m, n % m) : n;
}

function lcm(n, m) { // 최소공배수
    return n * m / gcf(n, m);
}

function solution(n, m) {
    return [gcf(n, m), lcm(n, m)];
}
