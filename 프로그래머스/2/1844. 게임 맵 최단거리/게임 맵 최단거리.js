class Queue {
    items = [];
    front = 0;
    rear = 0;
    pop() {
        return this.items[this.front++];
    }
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(maps) {
    const [n, m] = [maps.length, maps[0].length];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const queue = new Queue();
    queue.push([0, 0, 1]); // [x좌표, y좌표, 거리]
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    visited[0][0] = true;
    
    let answer = -1;
    while(!queue.isEmpty() && answer === -1){    
        const [x, y, dist] = queue.pop();
        directions.forEach(([dx, dy]) => {
            const [nx, ny] = [x + dx, y + dy];
            if(nx === n - 1 && ny === m - 1) {
                answer = dist + 1;
                return;
            }
            if(nx < n && nx >= 0 && ny < m && ny >= 0 && maps[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny, dist + 1]);
                visited[nx][ny] = true;
            }
        })
    }
    return answer;
}