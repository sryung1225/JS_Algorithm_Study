function solution(todo_list, finished) {
    let answer = [];
    for(let i in todo_list){
        if(!finished[i])
            answer.push(todo_list[i]);
    }
    return answer;
}