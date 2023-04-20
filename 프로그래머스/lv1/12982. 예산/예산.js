function solution(d, budget) {
    d.sort((a, b) => a - b); // 가격 오름차순 정렬
    while(d.reduce((a, b) => a + b, 0) > budget)
        d.pop();
    return d.length;
}
