function solution(s) {
    let nums = [];
    let arr1 = s.slice(2, s.length - 2).split("},{");
    arr1.forEach((tuples) => {
        let arr2 = tuples.split(",").map(Number);
        nums.push(arr2)
    })
    nums.sort((a, b) => a.length - b.length);
    
    let answer = [];
    nums.forEach((num) => {
        num.forEach((n) => {
            if(!answer.includes(n)){
                answer.push(n);
            }
        })
    })
    return answer;
}