function solution(survey, choices) {
    let types = {"R": 0, "T": 0, "F": 0, "C": 0, 
                 "M": 0, "J": 0, "A": 0, "N": 0};
    survey.forEach((v, i) => {
        let score = 0;
        if(choices[i] === 1)
            types[v.slice(0, 1)] += 3;
        else if(choices[i] === 2)
            types[v.slice(0, 1)] += 2;
        else if(choices[i] === 3) 
            types[v.slice(0, 1)] += 1;
        else if(choices[i] === 5)
            types[v.slice(1)] += 1;
        else if(choices[i] === 6)
            types[v.slice(1)] += 2;
        else if(choices[i] === 7)
            types[v.slice(1)] += 3;
    })
    
    let answer = "";
    types["R"] >= types["T"] ? answer += "R" : answer += "T";
    types["C"] >= types["F"] ? answer += "C" : answer += "F";
    types["J"] >= types["M"] ? answer += "J" : answer += "M";
    types["A"] >= types["N"] ? answer += "A" : answer += "N";
    return answer;
}