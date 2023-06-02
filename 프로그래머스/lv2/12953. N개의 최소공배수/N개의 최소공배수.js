function solution(arr) {
    let max = Math.max(...arr);
    let mul = arr.reduce((acc, cur) => acc*cur, 1);
    for(let i=1; i<=mul/max; i++){
        let answer = max*i;
        let check = 0;
        arr.forEach(v => {
            if(answer % v === 0)
                check++;
        })
        if(check === arr.length)
            return answer;
    }
}