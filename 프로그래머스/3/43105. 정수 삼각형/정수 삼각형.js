function solution(triangle) {
    for(let x=triangle.length-1; x>=0; x--){
        for(let y=0; y<triangle[x].length-1; y++){
            const big = Math.max(triangle[x][y], triangle[x][y+1]);
            triangle[x-1][y] += big;
        };
    };
    return triangle[0][0];
}