function solution(N, road, K) {
    const map = Array.from({ length: N }, () => Array(N).fill(Number.MAX_SAFE_INTEGER));
    road.forEach(v => {
        const [i1, i2, dis] = [v[0]-1, v[1]-1, v[2]];
        if(dis < map[i1][i2]){
            map[i1][i2] = dis;
            map[i2][i1] = dis;
        }
    });
    for(let k=0; k<N; k++){
        for(let i=0; i<N; i++){
            for(let j=0; j<N; j++){
                if(map[i][j] > map[i][k]+map[k][j]){
                    map[i][j] = map[i][k]+map[k][j];
                }
            }
            map[i][i] = 0;
        }
    }
    return map[0].filter(n => n <= K).length;
}
