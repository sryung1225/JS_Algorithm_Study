function solution(survey, choices) {
    const types = {"R": 0, "T": 0, "F": 0, "C": 0, 
                   "M": 0, "J": 0, "A": 0, "N": 0};

    survey.forEach((v, i) => {
        let score = choices[i] - 4;
        let type = [...v][score < 0 ? 0 : 1];
        types[type] += Math.abs(score);
    });
    
    const { R, T, C, F, J, M, A, N } = types;
    return `${R >= T ? 'R' : 'T'}${C >= F ? 'C' : 'F'}${J >= M ? 'J' : 'M'}${A >= N ? 'A' : 'N'}`;
}