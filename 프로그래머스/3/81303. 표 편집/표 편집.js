function solution(n, k, cmd) {
    const up = [...new Array(n + 2)].map((_, i) => i - 1);
    const down = [...new Array(n + 1)].map((_, i) => i + 1);
    k += 1;
    const d = [];
    
    cmd.forEach((c) => {
        const [action, num] = c.split(" ");
        switch(action){
            case "U":
                for(let i=0; i<num; i++){
                    k = up[k];
                }
                break;
            case "D":
                for(let i=0; i<num; i++){
                    k = down[k];
                }
                break;
            case "C":
                d.push(k);
                up[down[k]] = up[k];
                down[up[k]] = down[k];
                k = n < down[k] ? up[k] : down[k];
                break;
            case "Z":
                const i = d.pop();
                down[up[i]] = i;
                up[down[i]] = i;
        }
    })
    
    const answer = new Array(n).fill("O");
    d.forEach((i) => {
        answer[i - 1] = "X";
    })
    return answer.join("");
}