function solution(array) {
    if([...new Set(array)].length === 1) 
        return array[0];
    
    array = array.sort((a, b) => a - b);
    let arr = [];
    let tmp = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] === array[i+1]){
            tmp++;
        } else {
            arr.push([array[i], tmp]);
            tmp = 0;
        }
    }
    arr.sort((a, b) => b[1] - a[1]);
    return arr[0][1] === arr[1][1] ? -1 : arr[0][0];
}