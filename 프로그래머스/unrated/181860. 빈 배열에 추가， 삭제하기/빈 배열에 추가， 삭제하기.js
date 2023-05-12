function solution(arr, flag) {
    let X = [];
    for(let i in arr){
        if(flag[i]){
            X = X.concat(new Array(arr[i]*2).fill(arr[i]));
        } else {
            X = X.slice(0, X.length - arr[i]);
        }
    }
    return X;
}