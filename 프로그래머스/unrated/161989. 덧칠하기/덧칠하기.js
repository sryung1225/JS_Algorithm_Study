function solution(n, m, section) {
    let answer = 0;
    let wall = Array(n).fill(0);
    section.forEach(v =>{
        wall[v-1] = -1;
    });
    for(let i=0; i<n; i++){
        if(wall[i] === -1){
            answer++;
            wall.fill(0, i, i+m);
            i+=m-1;
        }
    }
    return answer;
}