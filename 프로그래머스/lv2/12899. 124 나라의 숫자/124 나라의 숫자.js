function solution(n) {
    let arr = [1, 2, 4];
    let size = arr.length;
    let answer = [];
    
    while(n > 0){
        if(n % size === 0){
            answer.push(arr[size-1]);
            n = Math.floor(n / size) - 1;
        } else {
            answer.push(arr[n % 3 - 1]);
            n = Math.floor(n / size);
        }
    }
    return answer.reverse().join("");
}