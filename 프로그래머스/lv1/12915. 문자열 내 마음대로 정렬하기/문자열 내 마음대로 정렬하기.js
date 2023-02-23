function solution(strings, n) {
    // 고전.. 방식
    let tmp = "";
    for(let i=0; i<strings.length; i++){
        for(let j=i+1; j<strings.length; j++){
            if(strings[i].substr(n, 1) > strings[j].substr(n, 1)){
                tmp = strings[i];
                strings[i] = strings[j];
                strings[j] = tmp;
            } else if(strings[i].substr(n, 1) === strings[j].substr(n, 1)){
                if(strings[i] > strings[j]){
                    tmp = strings[i];
                    strings[i] = strings[j];
                    strings[j] = tmp;
                }
            }
        }
    }
    return strings
}