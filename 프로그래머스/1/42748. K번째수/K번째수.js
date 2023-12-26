function solution(array, commands) {
    const answer = [];
    commands.forEach(v => {
        const arr = [...array].slice(v[0]-1, v[1]);
        arr.sort((a, b) => a - b);
        answer.push(arr[v[2]-1]);
    })
    return answer;
}