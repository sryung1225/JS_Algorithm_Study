function solution(n, computers) {
    const visited = Array(n).fill(false);
    let answer = 0;
    
    function dfs(i) {
        visited[i] = true;
        for(let j=0; j<n; j++){
            if(computers[i][j] === 1 && !visited[j]) dfs(j);
        }
    }
    
    for(let i=0; i<n; i++){
        if(visited[i]) continue;
        dfs(i);
        answer++;
    }
    return answer;
}