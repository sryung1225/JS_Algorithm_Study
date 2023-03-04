function solution(phone_number){
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}