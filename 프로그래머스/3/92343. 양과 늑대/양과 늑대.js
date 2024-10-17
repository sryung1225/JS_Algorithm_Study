function solution(info, edges) {
    const edgesObj = {};
    edges.forEach(([from, to]) => {
        if(!edgesObj[from]) edgesObj[from] = [];
        edgesObj[from].push(to);
    })
    
    let maxSheep = 0;
    function dfs(node, sheep, wolf, possible){
        const newSheep = sheep + (info[node] === 0 ? 1 : 0);
        const newWolf = wolf + (info[node] === 1 ? 1 : 0);
        if(newWolf >= newSheep) return;
        maxSheep = Math.max(maxSheep, newSheep);
        
        const nextPossible = [...possible];
        nextPossible.splice(nextPossible.indexOf(node), 1);
        (edgesObj[node] || []).forEach((neighbor) => {
            nextPossible.push(neighbor);
        });
        nextPossible.forEach((nextNode) => {
            dfs(nextNode, newSheep, newWolf, nextPossible);
        })   
    }
    dfs(0, 0, 0, [0]);
    return maxSheep;
}