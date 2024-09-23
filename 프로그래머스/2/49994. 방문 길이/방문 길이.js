function move(pos, dir) {
    let newPos = [...pos];
    switch(dir) {
        case "U":
            newPos[1]++;
            break;
        case "D":
            newPos[1]--;
            break;
        case "R":
            newPos[0]++;
            break;
        case "L":
            newPos[0]--;
            break;
        default:
            return;       
    }
    return newPos;
}

function solution(dirs) {
    let pos = [0, 0];
    const limit = 5;
    const routes = new Set();
    
    dirs.split("").forEach((dir) => {
        const newPos = move(pos, dir);
        if(newPos[0] > limit || newPos[0] < -limit || newPos[1] > limit || newPos[1] < -limit) return;
        const route = `(${pos[0]}, ${pos[1]}) -> (${newPos[0]}, ${newPos[1]})`;
        const reverseRoute = `(${newPos[0]}, ${newPos[1]}) -> (${pos[0]}, ${pos[1]})`;
        if(!routes.has(reverseRoute)){
            routes.add(route);
        }
        pos = newPos;
    })
    
    const answer = routes.size;
    return answer;
}