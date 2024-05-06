function solution(phone_number) {
    let answer = '';
    [...phone_number].forEach((num, index) => {
        if(index < phone_number.length - 4){
            answer += '*';
        } else {
            answer += num;
        }
    })
    return answer;
}