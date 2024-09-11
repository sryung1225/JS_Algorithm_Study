function solution(numbers) {
    const sums = [];
    for(let i=0; i<numbers.length - 1; i++){
        for(let j=i+1; j<numbers.length; j++){
            const sum = numbers[i] + numbers[j];
            sums.push(sum);
        }
    }
    const answer = [...new Set(sums)].sort((a, b) => a - b);
    return answer;
}