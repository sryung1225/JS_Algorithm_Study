function solution(common) {
    let answer = 0;
    let diff = common[1] - common[0]; // 등차수열이라 가정한 후 공차 지정
    if(common[2] === common[1] + diff){
        answer = common[common.length-1] + diff;
    } else { // 등비수열
        diff = common[1] / common[0];
        answer = common[common.length-1] * diff;
    }
    return answer;
}