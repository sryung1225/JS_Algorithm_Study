function solution(n_str) {
    for(let i of n_str){
        if(i == 0)
            n_str = n_str.slice(1);
        else
            return n_str;
    }
}