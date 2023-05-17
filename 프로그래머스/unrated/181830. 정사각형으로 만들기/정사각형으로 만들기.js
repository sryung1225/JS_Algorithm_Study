function solution(arr) {
    let [sz1, sz2] = [arr.length, arr[0].length];
    if(sz1 === sz2){
        return arr;
    } else if(sz1 > sz2){
        arr.map(v => {
            for(let i=0; i<sz1-sz2; i++)
                v.push(0);
        });
    } else if(sz1 < sz2){
        for(let i=sz1; i<sz2; i++){
            arr.push(new Array(sz2).fill(0))
        }
    }
    return arr;
}