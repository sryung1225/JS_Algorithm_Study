// 모든 경우의 수 => DFS (스택 / 재귀함수)

function solution(numbers, target) {
    let answer = 0;
    function dfs(index, sum){
        if(index === numbers.length){
            if(target === sum) answer++;
            return;
        }
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    dfs(0, 0);
    return answer;
}