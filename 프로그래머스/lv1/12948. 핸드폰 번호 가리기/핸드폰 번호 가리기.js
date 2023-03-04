function solution(phone_number) {
    let answer = '';
    let length = phone_number.length;
    for(let i=0; i<length-4; i++){
        answer += "*";
    }
    answer += phone_number.slice(length-4, length);
    return answer;
}