function solution(strArr) {
    let sizeArr = strArr.map(v => v.length);
    let countArr = new Array(Math.max(...sizeArr)).fill(0);
    for(let i of sizeArr){
        countArr[i-1]++;
    }
    return Math.max(...countArr);
}