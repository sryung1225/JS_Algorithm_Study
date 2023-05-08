function solution(arr) {
    let x = 0;
    let arrx = [arr];
    while(true) {
        x++;
        arr = arr.map(v => (v>=50 && v%2===0) ? v/2 : (v<50 && v%2!==0) ? v*2+1 : v);
        arrx.push(arr);
        if(JSON.stringify(arrx[x-1]) == JSON.stringify(arrx[x])) 
            return x-1;
    }
}