function solution(dirs) {
    let pos = [0, 0]; // 현재 위치
    let answer = []; // 처음 걸어본 길
    for(let i=0; i<dirs.length; i++){
        let road = "";
        let start = [...pos];
        if(dirs[i] === "U" && pos[1] < 5){
            pos[1]++;
        } else if(dirs[i] === "D" && pos[1] > -5){
            pos[1]--;
        } else if(dirs[i] === "L" && pos[0] > -5){
            pos[0]--;
        } else if(dirs[i] === "R" && pos[0] < 5){
            pos[0]++;
        } else {
            continue;
        }
        let end = [...pos];
        if(start[0] > end[0] || (start[0] === end[0] && start[1] > end[1])){
            road = `(${end})to(${start})`;
        } else if(start[0] < end[0] || (start[0] === end[0] && start[1] < end[1])){
            road = `(${start})to(${end})`;
        }
        if(!answer.includes(road)){
            answer.push(road);
        }
    }
    return answer.length;
}