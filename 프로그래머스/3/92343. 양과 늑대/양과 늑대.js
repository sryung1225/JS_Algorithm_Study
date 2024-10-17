function solution(info, edges) {
    const edgesObj = {};
    edges.forEach(([from, to]) => {
        if(!edgesObj[from]) edgesObj[from] = [];
        edgesObj[from].push(to);
    })
    
    let maxSheep = 0;
    const stack = [[0, 0, 0, [0]]]; // [node, sheep, wolf, possible]
    while(stack.length > 0){
        const [node, sheep, wolf, possible] = stack.pop();
        const newSheep = sheep + (info[node] === 0 ? 1 : 0);
        const newWolf = wolf + (info[node] === 1 ? 1 : 0);
        if(newWolf >= newSheep) continue;
        maxSheep = Math.max(maxSheep, newSheep);
        
        const nextPossible = [...possible];
        nextPossible.splice(nextPossible.indexOf(node), 1);
        (edgesObj[node] || []).forEach((neighbor) => {
            nextPossible.push(neighbor);
        });
        nextPossible.forEach((nextNode) => {
            stack.push([nextNode, newSheep, newWolf, nextPossible]);
        })   
    }
    return maxSheep;
}