function move(x, y, dir) {
    switch(dir) {
        case "U":
            return [x, y+1];
        case "D":
            return [x, y-1];
        case "R":
            return [x+1, y];
        case "L":
            return [x-1, y];
    }
}

function solution(dirs) {
    let pos = [0, 0];
    const limit = 5;
    const routes = new Set();
    
    dirs.split("").forEach((dir) => {
        const newPos = move(...pos, dir);
        if(newPos[0] > limit || newPos[0] < -limit || newPos[1] > limit || newPos[1] < -limit) return;
        const route = `(${pos[0]}, ${pos[1]}) - (${newPos[0]}, ${newPos[1]})`;
        const reverseRoute = `(${newPos[0]}, ${newPos[1]}) - (${pos[0]}, ${pos[1]})`;
        routes.add(route);
        routes.add(reverseRoute);
        pos = newPos;
    })
    
    const answer = routes.size / 2;
    return answer;
}