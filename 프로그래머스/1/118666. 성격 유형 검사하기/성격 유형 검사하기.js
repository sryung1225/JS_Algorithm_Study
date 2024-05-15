function solution(survey, choices) {
    const type = { 'RT': 0, 'CF': 0, 'JM': 0, 'AN': 0 };
    survey.forEach((quiz, index) => {
        if(type[quiz] === undefined) {
            const newQuiz = quiz[1] + quiz[0];
            type[newQuiz] += choices[index] - 4;
        } else {
            type[quiz] -= choices[index] - 4;
        }
    })
    
    let answer = '';
    for(let i in type){
        if(type[i] < 0) answer += i[1];
        else answer += i[0];
    }
    return answer;
}