function solution(my_string) {
    let answer = [];
    for(let i=1; i<=my_string.length; i++){
        answer.push(my_string.slice(my_string.length - i));
    }
    return answer.sort();
}