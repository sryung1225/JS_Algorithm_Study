function solution(n, m, section) {
    let answer = 0;
    let wall = Array(n).fill(0).map((_, i) => section.includes(i+1) ? -1 : 0);
    for(let i=0; i<wall.length; i++){
        if(wall[i] === -1){
            answer++;
            for(let j=i; j<i+m; j++){
                wall[j]++;
            }
            i+=m-1;
        }
    }
    return answer;
}