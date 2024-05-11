function solution(brown, yellow) {
    let [x, y] = [0, 0];
    for(let i=1; i<=yellow; i++){
        x = i;
        y = yellow / i;
        if(brown === 2*x + 2*y + 4) break;
    }
    return [x+2, y+2].sort((a, b) => b - a);
}