function solution(a, b, c, d) {
    let [i, j, k, l] = [a, b, c, d].sort(); // 오름차순 정렬
    
    if(i === l) return 1111*i;
    else if(i === k && i !== l) return (10*i+l)**2;
    else if(i !== j && j === l) return (10*j+i)**2;
    else if(i === j && j !== k && k === l) return (i+k)*Math.abs(i-k);
    else if(i === j && j !== k && k !== l) return k*l;
    else if(i !== j && j === k && k !== l) return i*l;
    else if(i !== j && j !== k && k === l) return i*j;
    else return i;
}