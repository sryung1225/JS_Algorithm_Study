function solution(numbers) {
    let answer = [];
    numbers.forEach((v, i) => {
        const num1 = numbers.slice();
        num1.splice(i, 1); 
        num1.forEach(z => {
            let num2 = v + z;
            if (!answer.includes(num2))
                answer.push(num2);
        });
    });
    return answer.sort((a, b) => a - b);
}