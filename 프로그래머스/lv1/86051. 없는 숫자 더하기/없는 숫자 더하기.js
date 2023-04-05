function solution(numbers) {
    let answer = 0;
    let newSet = new Set(numbers.sort()); // 중복제거 & 오름차순
    let newArr = Array.from(newSet); // 다시 배열화
    for(let i=0; i<=9; i++){
        if(newArr[i] !== i){
            answer += i;
            newArr.unshift("*"); // 배열 길이 맞추기 용도
        }
    }
    return answer;
}