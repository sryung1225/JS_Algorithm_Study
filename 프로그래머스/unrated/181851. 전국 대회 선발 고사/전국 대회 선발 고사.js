function solution(rank, attendance) {
    rank = rank.map((v, i) => [i, v]);
    let [a, b, c] = rank.filter((v, i) => attendance[i]).sort((a, b) => a[1] - b[1]);
    return 10000*a[0] + 100*b[0] + c[0];
}