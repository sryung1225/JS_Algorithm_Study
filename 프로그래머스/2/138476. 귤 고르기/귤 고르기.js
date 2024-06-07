function solution(k, tangerine) {
    let obj = {};
    tangerine.forEach((t) => {
        if(!obj[t]) obj[t] = 1;
        else obj[t]++;
    })
    let array = Object.entries(obj);
    array.sort((a, b) => a[1] - b[1]);
    
    let [count, sum] = [0, 0];
    while(sum < k){
        sum += array.pop()[1];
        count++;
    }
    return count;
}