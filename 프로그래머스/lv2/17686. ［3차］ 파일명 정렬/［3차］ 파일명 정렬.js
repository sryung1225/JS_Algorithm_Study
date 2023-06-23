function solution(files) {
    let filesDiv = [];
    files.forEach((v, idx) => {
        let numberIdx = [];
        for(let i=0; i<v.length; i++){
            if(!isNaN(+v[i]) && v[i] !== " "){
                numberIdx.push(i);
            }
            if(numberIdx.length > 0 && isNaN(+v[i])){
                break;
            }
        }
        let head = v.slice(0, numberIdx[0]).toUpperCase();
        let number = v.slice(numberIdx[0], numberIdx[numberIdx.length-1]+1);
        filesDiv.push([head, +number, idx]);
    })
    filesDiv.sort((a, b) => {
        if(a[0] !== b[0])
            return a[0].localeCompare(b[0]);
        else if(a[1] !== b[1])
            return a[1] - b[1];
        else
            return 1;
    });
    let answer = [];
    filesDiv.forEach(v => {
        answer.push(files[v[2]]);
    })
    return answer;
}