function solution(dots) {
    let arr = [];
    for(let i=0; i<4; i++){
        for(let j=i+1; j<4; j++){
            arr.push((dots[i][0] - dots[j][0]) / (dots[i][1] - dots[j][1]));
        }
    } // 기울기들로만 배열 생성
    let set = new Set(arr); // 중복값 제거를 위해 set으로 변환
    if(arr.length === [...set].length){
        return 0;
    } else {
        return 1;
    }
}