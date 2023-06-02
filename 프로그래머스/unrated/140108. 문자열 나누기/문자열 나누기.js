function solution(s) {
    let answer = 0;
    let arr = [...s];
    while(arr.length > 0){
        let x = arr.shift();
        let count1 = 1; // x가 등장하는 횟수
        let count2 = 0; // x가 아닌 글자가 등장하는 횟수
        let stop = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i] === x) count1++;
            else count2++;
            if(count1 === count2 || i === arr.length - 1){
                stop = i;
                break;
            }
        }
        arr = arr.slice(stop+1);
        answer++;
    }
    return answer;
}