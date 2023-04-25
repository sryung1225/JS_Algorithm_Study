function solution(participant, completion) {
    let parArr = participant.sort();
    let comArr = completion.sort();
    // console.log(parArr);
    // console.log(comArr);
    
    for(let i=0; i<parArr.length; i++){
        if(parArr[i] !== comArr[i])
            return parArr[i];
    }
}