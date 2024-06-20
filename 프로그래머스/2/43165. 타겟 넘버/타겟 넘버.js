function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, sum){
        if(index < numbers.length) {
            dfs(index + 1, sum + numbers[index]);
            dfs(index + 1, sum - numbers[index]);
        } else {
            if(sum === target) answer++;
        }
    }
    
    dfs(0, 0);
    
    return answer;
}