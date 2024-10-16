function solution(numbers, target) {
    let answer = 0;
    const stack = [];
    stack.push([0, 0]); // [index, sum]
    while(stack.length > 0){
        const [index, sum] = stack.pop();
        if(index === numbers.length){
            if(sum === target){
                answer++;
            }
        } else {
            stack.push([index + 1, sum + numbers[index]]);
            stack.push([index + 1, sum - numbers[index]]);   
        }
    }
    return answer;
}