function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    return s.split("").filter(v => !isNaN(+v)).length === s.length ? true : false;
}