function solution(num_list) {
    const sum = num_list.reduce((a, c) => a + c, 0);
    const mul = num_list.reduce((a, c) => a * c, 1);
    if(sum**2 > mul) return 1;
    else return 0;
}