function solution(line) {
    // 교점 체크 & 범위 확인
    let point = [];
    let [minX, maxX, minY, maxY] = [Infinity, -Infinity, Infinity, -Infinity];
    for(let i=0; i<line.length; i++){
        for(let j=i+1; j<line.length; j++){
            const [A, B, E] = line[i];
            const [C, D, F] = line[j];
            if(A*D - B*C === 0)
                continue;
            let x = (B*F - E*D) / (A*D - B*C);
            let y = (E*C - A*F) / (A*D - B*C);
            if(x % 1 || y % 1)
                continue;
            point.push([x, y]);
            [minX, maxX, minY, maxY] = [Math.min(x, minX), Math.max(x, maxX), Math.min(y, minY), Math.max(y, maxY)];
        }
    }
    // 교점 표시하기
    let answer = Array.from(Array(maxY-minY+1), () => Array(maxX-minX+1).fill("."));
    point.forEach(v => {
        answer[maxY-v[1]][v[0]-minX] = "*";
    })
    return answer.map(v => v.join(""));
}