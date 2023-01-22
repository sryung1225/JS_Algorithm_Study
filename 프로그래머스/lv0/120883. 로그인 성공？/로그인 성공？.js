function solution(id_pw, db) {
    let answer = "";
    db.forEach((account) => {
        if(account[0] === id_pw[0] && account[1] === id_pw[1]) answer = "login";
        else if(account[0] === id_pw[0] && account[1] !== id_pw[1]) answer = "wrong pw";
        else if(account[0] !== id_pw[0] && account[1] !== id_pw[1]) answer = "fail";
    })
    
    return answer;
}