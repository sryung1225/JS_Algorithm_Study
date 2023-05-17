function solution(num_list) {
    let oddSum = "";
    let evenSum = "";
    for(let i of num_list){
        if(i%2 === 0) evenSum += i+"";
        else oddSum += i+"";
    }
    return +evenSum + +oddSum;
}