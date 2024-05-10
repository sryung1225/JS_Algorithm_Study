function solution(n, m, section) {
    const walls = new Array(n).fill(1);
    section.forEach((num) => {
        walls[num-1] = 0;
    })
    
    let answer = 0;
    walls.forEach((wall, index) => {
        if(wall === 0){
            answer++;
            for(let i=index; i<index+m; i++){
                walls[i] = 1;
            }
        }
    })
    return answer;
}

[1, 1, 0, 0, 1, 1, 0, 1]
[1, 1, 1, 1, 1, 1, 1, 1]