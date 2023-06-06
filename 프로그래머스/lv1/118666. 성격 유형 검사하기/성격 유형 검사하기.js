function solution(survey, choices) {
    let types = {"R": 0, "T": 0, "F": 0, "C": 0, 
                 "M": 0, "J": 0, "A": 0, "N": 0};

    survey.forEach((v, i) => {
        let score = choices[i] - 4;
        let type = [...v][score < 0 ? 0 : 1];
        types[type] += Math.abs(score);
    })
    
    let answer = "";
    types["R"] >= types["T"] ? answer += "R" : answer += "T";
    types["C"] >= types["F"] ? answer += "C" : answer += "F";
    types["J"] >= types["M"] ? answer += "J" : answer += "M";
    types["A"] >= types["N"] ? answer += "A" : answer += "N";
    return answer;
}