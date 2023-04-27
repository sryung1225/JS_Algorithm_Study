function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let answer = [];
    
    let res1 = answers.filter((ans, i) => ans === pattern1[i % pattern1.length]).length;
    let res2 = answers.filter((ans, i) => ans === pattern2[i % pattern2.length]).length;
    let res3 = answers.filter((ans, i) => ans === pattern3[i % pattern3.length]).length;
    
    const max = Math.max(res1, res2, res3);
    if(res1 === max) answer.push(1);
    if(res2 === max) answer.push(2);
    if(res3 === max) answer.push(3);
    
    return answer;
}