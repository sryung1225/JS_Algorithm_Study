function solution(my_string, indices) {
    indices.sort((a, b) => b-a);
    let answer = [...my_string];
    for(let i of indices){
        answer.splice(i, 1);
    }
    return answer.join("");
}