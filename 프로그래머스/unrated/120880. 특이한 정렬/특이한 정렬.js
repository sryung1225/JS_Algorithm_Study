function solution(numlist, n) {
    let result = [...numlist].sort((a, b) => {
        let diffA = Math.abs(n - a);
        let diffB = Math.abs(n - b);
        
        if(diffA === diffB){
            if(a > b){
                return -1;
            } else {
                return 1;
            }
        } else {
            return diffA - diffB;
        }
    })
    return result;
}