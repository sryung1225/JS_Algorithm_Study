function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let res1 = 0;
    let res2 = 0;
    let res3 = 0;
    let answer = [];
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === pattern1[i % pattern1.length]) res1 += 1;
        if(answers[i] === pattern2[i % pattern2.length]) res2 += 1;
        if(answers[i] === pattern3[i % pattern3.length]) res3 += 1;
    }
    
    const max = Math.max(res1, res2, res3);
    if(res1 === max) answer.push(1);
    if(res2 === max) answer.push(2);
    if(res3 === max) answer.push(3);
    
    return answer.sort();
}