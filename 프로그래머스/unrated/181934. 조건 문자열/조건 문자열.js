function solution(ineq, eq, n, m) {
    let str = ineq+eq;
    switch(str){
        case ">=":
            return +(n >= m);
        case "<=":
            return +(n <= m);
        case ">!":
            return +(n > m);
        case "<!":
            return +(n < m);
    }
}