function solution(arr) {
    let min = arr[0];
    for(let i of arr){
        if(i < min) min = i;
    }
    let answer = arr.filter(v => v !== min).length === 0 ? [-1] : arr.filter(v => v !== min);
    return answer;
}