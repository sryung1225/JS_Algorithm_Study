function solution(dots) {
    let arrX = [];
    let arrY = [];
    for (let i of dots){
        arrX.push(i[0]);
        arrY.push(i[1]);
    }
    let answer = (Math.max(...arrX)-Math.min(...arrX))*(Math.max(...arrY)-Math.min(...arrY));
    return answer;
}