function solution(numbers) {
    let stack = [];
    const answer = new Array(numbers.length).fill(-1);
    numbers.forEach((num, idx) => {
        while(stack.length > 0 && num > numbers[stack[stack.length - 1]]) {
            let i = stack.pop();
            answer[i] = num;
        }
        stack.push(idx);
    })
    return answer;
}