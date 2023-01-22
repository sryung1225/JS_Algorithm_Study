function solution(babbling) {
    let answer = 0;
    for(let i of babbling){
        // console.log(i);
        let str = i.replace(/aya|ye|woo|ma/gi, "");
        // console.log(str);
        if(str === "") answer++;
    }
    return answer;
}