function solution(n, vertex) {
    const linked = {};
    vertex.forEach(([from, to]) => {
        if(!linked[from]) linked[from] = [];
        if(!linked[to]) linked[to] = [];
        linked[from].push(to);
        linked[to].push(from);
    })
    
    // 1번 노드에서부터의 최단 거리 계산
    const distances = new Array(n+1).fill(-Infinity);
    distances[1] = 0;
    
    // 최단 거리 계산이므로 BFS를 위해 큐 사용
    const queue = [1]; // 출발 위치 넣고 시작
    
    while(queue.length > 0){
        const current = queue.shift();
        linked[current].forEach((next) => {
            if(distances[next] === -Infinity){
                distances[next] = distances[current] + 1;
                queue.push(next);
            }
        });
    }
    
    const maxDistances = Math.max(...distances);
    const answer = distances.filter((distance) => distance === maxDistances).length;
    return answer;
}