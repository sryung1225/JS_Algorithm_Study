function isPrime(num) {
    const sqrtNum = Math.sqrt(num);
    if(Number.isInteger(sqrtNum)) return false;
    for(let i=2; i<sqrtNum; i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    const size = nums.length;
    for(let i=0; i<size-2; i++){
        for(let j=i+1; j<size-1; j++){
            for(let k=j+1; k<size; k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }   
    return answer;
}