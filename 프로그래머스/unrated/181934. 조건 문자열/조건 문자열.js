function solution(ineq, eq, n, m) {
    const operations = {
      ">=": (n, m) => n >= m,
      "<=": (n, m) => n <= m,
      ">!": (n, m) => n > m,
      "<!": (n, m) => n < m,
    };
    return Number(operations[ineq+eq](n, m));
}