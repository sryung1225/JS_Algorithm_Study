function solution(maps) {
    const [n, m] = [maps.length, maps[0].length];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // 최단 거리? => BFS => 큐
    const queue = [[0, 0, 1]]; // 방문 예정 위치 저장 (다음에 가야할 곳)
    const visited = Array.from(Array(n), () => Array(m).fill(false)); // 방문 이력 저장 (n*m)
    visited[0][0] = true;
    
    while(queue.length > 0){
        const [x, y, dist] = queue.shift(); // 현재 위치
        
        // 상대방 진영 도착
        if(x === n-1 && y === m-1){
            return dist;
        }
        
        for(const [dx, dy] of directions) {
            const [nx, ny] = [x+dx, y+dy]; // 이동 예정 좌표
            // 이동할 곳이 맵 내부라면
            if(nx >= 0 && nx < n && ny >= 0 && ny < m){
                // 이동할 곳이 방문 가능하고 이전에 방문한 적이 없다면
                if(maps[nx][ny] === 1 && !visited[nx][ny]) {
                    queue.push([nx, ny, dist+1]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
    
    return -1;
}