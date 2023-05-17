function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    let num = 1;
    let i = 0;
    let j = 0;
    let k = n;
    while(num <= n**2){
        for(let t=0; t<k; t++){
            answer[i][j++] = num++;
        }
        i++;
        j--;
        k--;
        for(let t=0; t<k; t++){
            answer[i++][j] = num++;
        }
        i--;
        j--;
        for(let t=0; t<k; t++){
            answer[i][j--] = num++;
        }
        i--;
        j++;
        k--;
        for(let t=0; t<k; t++){
            answer[i--][j] = num++;
        }
        i++;
        j++;
    }
    return answer;
}