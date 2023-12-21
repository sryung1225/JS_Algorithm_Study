function solution(numbers, target) {
    let answer = 0;
    const size = numbers.length;
    
    function dfs(count, sum) {
        if(count < size) {
            dfs(count + 1, sum + numbers[count]);
            dfs(count + 1, sum - numbers[count]);
        } else {
            if(sum === target) {
                answer++;
            }
        }
    }
    
    dfs(0, 0);
    
    return answer;
}