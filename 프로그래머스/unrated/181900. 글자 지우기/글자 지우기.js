function solution(my_string, indices) {
    return [...my_string].reduce((acc, cur, i) => acc += indices.includes(i) ? "" : cur, "");
}