function solution(numbers, target) {
    let answer = 0;
    const size = numbers.length;
    
    function dfs(count, sum) {
        if(count === size) {
            if(target === sum) {
                answer++;
            }
            return;
        }
        dfs(count + 1, sum + numbers[count]);
        dfs(count + 1, sum - numbers[count]);
    }
    dfs(0, 0);
    
    return answer;
}