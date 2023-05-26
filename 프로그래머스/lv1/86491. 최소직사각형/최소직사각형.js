function solution(sizes) {
    sizes = sizes.map(v => v.sort((a, b) => a - b));
    let [w, h] = sizes.reduce(
        ([accW, accH], [curW, curH]) => [Math.max(accW, curW), Math.max(accH, curH)]
        , [0, 0]);
    return w*h;
}