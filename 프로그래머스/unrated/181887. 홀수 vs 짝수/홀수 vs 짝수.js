function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i=0; i<num_list.length; i++){
        if(i%2 === 0)
            evenSum += num_list[i];
        else
            oddSum += num_list[i];
    }
    return evenSum > oddSum ? evenSum : oddSum;
}