function solution(array, commands) {
    let answer = [];
    commands.forEach((command) => {
        const [i, j, k] = command;
        let arr = array.slice(i-1, j).sort((a, b) => a - b);
        answer.push(arr[k-1]);
    })
    return answer;
}