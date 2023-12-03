function solution(phone_book) {
    let answer = true;
    
    const set = new Set(phone_book);

    for(let i=0; i<phone_book.length; i++) {
        const phone = phone_book[i];
        for(let j=1; j<phone.length; j++) {
            const prefix = phone.slice(0, j);
            if(set.has(prefix)) {
                answer = false;
                break;
            }
        }
    }

    return answer;
}
