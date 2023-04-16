function isPrime(x) { // x가 소수인지를 확인하는 함수 isPrime
    let end = Math.sqrt(x);
    for(let i=2; i<=end; i++){
        if(x%i === 0) return false;
    }
    return true;
}

function pickThree(arr){ // 3개의 수를 고르고 더한 값을 저장한 배열을 만드는 함수 pickThree
    let sumArr = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length; k++){
                sumArr.push(arr[i] + arr[j] +arr[k]);
                // console.log(arr[i], arr[j], arr[k], sumArr);
            }
        }
    }
    return sumArr;
}

function solution(nums) {
    let answer = 0;
    let sumArr = pickThree(nums);
    for(let i of sumArr){
        if(isPrime(i) === true) answer++;
    }
    return answer;
}