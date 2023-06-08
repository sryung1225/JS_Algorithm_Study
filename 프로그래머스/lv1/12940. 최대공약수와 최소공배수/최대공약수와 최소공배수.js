function solution(n, m) {
    let gcf = 1; // 최대공약수
    let lcm = 1; // 최소공배수
    for(let i=Math.min(n, m); i>0; i--){
        if(n % i === 0 && m % i === 0){
            gcf = i;
            break;
        }
    }
    lcm = gcf * (n / gcf) * (m / gcf);
    return [gcf, lcm];
}