function solution(phone_book) {
    const set = new Set(phone_book);
    for(let i=0; i<phone_book.length; i++) {
        const number = phone_book[i];
        for(let j=1; j<number.length; j++) {
            const pre = number.slice(0, j);
            if(set.has(pre)) {
                return false;
            }
        }
    }
    return true;
}