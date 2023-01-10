function solution(polynomial) {
    const arr = polynomial.split(" ");
    
    let answer = [0, "+", 0];
    for(let i of arr){
        if(i.includes("x") && i !== "x"){
            answer[0] += parseInt(i);
        } else if (i === "x"){
            answer[0] += 1;
        } else if(i == Number(i)){
            answer[2] += Number(i);
        }
    }
    
    if(answer[0] === 0){
        answer[0] = "";
        answer[1] = "";
    } else if(answer[0] === 1){
        answer[0] = "x";
    } else {
        answer[0] += "x";
    }
    if(answer[2] === 0){
        answer[1] = "";
        answer[2] = "";
    }
    return answer.filter((e) => e !== '').join(" ");
}