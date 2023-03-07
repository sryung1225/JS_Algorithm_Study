function solution(s) {
    let arr = s.split(" ");
    let answer = [];
    for(let i of arr){
        let tmp = '';
        for(let j=0; j<i.length; j++){
            if(j%2 === 0) tmp += i.slice(j, j+1).toUpperCase();
            else tmp += i.slice(j, j+1).toLowerCase();
        }
        answer.push(tmp);
    }
    return answer.join(" ");
}