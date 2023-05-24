function solution(n, a=n+1) {
    const count1 = n.toString(2).match(/1/g).length;
    let count2 = a.toString(2).match(/1/g).length;
    if(count1 === count2){
        return a;
    } else {
        return solution(n, a+1);
    }
}