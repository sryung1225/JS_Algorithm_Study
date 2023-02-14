function solution(n) {
    let i = 0;
    while (i*i < n) i++;
    if (i*i === n){
        i++;
        return i*i; 
    } else {
        return -1;
    }
}