function solution(priorities, location) {
    let arr = priorities.map((v, i) => [v, i]);
    let exe = [];
    while(arr.length > 0){
        let tmp = arr.shift();
        for(let i=0; i<arr.length; i++){
            if(arr[i][0] > tmp[0]){
                arr.push(tmp);
                tmp = "";
                break;
            }
        }
        if(tmp){
            exe.push(tmp);
        }
    }
    for(let i=0; i<exe.length; i++){
        if(exe[i][1] === location){
            return i+1;
        }
    }
}