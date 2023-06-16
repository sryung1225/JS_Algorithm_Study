function solution(N, road, K) {
    let arr = Array(N+1).fill(Number.MAX_SAFE_INTEGER);
    let lines = Array.from(Array(N+1), () => []);
    road.forEach(v => {
        let [a, b, c] = v;
        lines[a].push({ to: b, cost: c });
        lines[b].push({ to: a, cost: c });
    });

    let queue = [{ to: 1, cost: 0 }];
    arr[1] = 0;

    while(queue.length){
        let { to } = queue.pop();
        lines[to].forEach((next) => {
            if (arr[next.to] > arr[to] + next.cost) {
                arr[next.to] = arr[to] + next.cost;
                queue.push(next);
            }
        });
    }
    return arr.filter(v => v <= K).length;
}