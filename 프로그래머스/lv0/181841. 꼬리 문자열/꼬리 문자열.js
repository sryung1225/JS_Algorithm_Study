function solution(str_list, ex) {
    let answer = '';
    str_list.forEach(v => {
        if(v.includes(ex))
            answer += "";
        else
            answer += v;
    })
    return answer;
}