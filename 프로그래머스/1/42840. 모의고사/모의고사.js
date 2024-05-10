function solution(answers) {
    const students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const scores = [0, 0, 0];
    
    answers.forEach((answer, index) => {
        for(let i=0; i<3; i++){
            if(students[i][index % students[i].length] === answer) scores[i]++;
        }
    })
    
    const max = Math.max(...scores);
    let answer = [];
    scores.forEach((score, index) => {
        if(score === max) answer.push(index+1);
    })
    answer.sort((a, b) => a - b);
    return answer;
}