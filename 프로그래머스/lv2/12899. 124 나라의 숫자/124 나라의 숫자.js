function solution(n) {
    let arr = [4, 1, 2];
    let size = arr.length;
    let answer = [];
    
    while(n){
        answer.push(arr[n % 3]);
        n = Math.floor((n - 1) / size);
    }
    return answer.reverse().join("");
}