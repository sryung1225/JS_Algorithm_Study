function solution(my_string, overwrite_string, s) {
    let answer = '';
    answer += my_string.slice(0, s); // 앞부분(0부터 s-1까지)
    answer += overwrite_string;
    answer += my_string.slice(answer.length); // 뒷부분
    return answer;
}