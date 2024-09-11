function solution(answers) {
    const students = ['12345', '21232425', '3311224455']
    let scores = new Array(students.length).fill(0);
    
    students.forEach((student, studentIndex) => {
        answers.forEach((answer, index) => {
            if(answer == student[index % student.length]){
                scores[studentIndex]++;
            }          
        })
    })
    
    const highScore = Math.max(...scores);
    
    const answer = [];
    scores.forEach((score, index) => {
        if(score === highScore)
            answer.push(index+1);
    })
    return answer;
}