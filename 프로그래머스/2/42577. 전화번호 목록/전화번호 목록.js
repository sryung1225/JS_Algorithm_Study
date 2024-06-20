function solution(phone_book) {
    phone_book.sort(); // 사전 순 정렬
    for(let i=0; i<phone_book.length - 1; i++){
        const number1 = phone_book[i];
        const size = number1.length;
        const number2 = phone_book[i+1];
        const pre = number2.slice(0, size);
        if(number1 === pre){
            return false;
        }
    }
    return true;
}