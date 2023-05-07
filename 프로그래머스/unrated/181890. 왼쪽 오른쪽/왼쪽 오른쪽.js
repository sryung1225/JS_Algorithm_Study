function solution(str_list) {
    const left = str_list.indexOf("l");
    const right = str_list.indexOf("r");
    
    if(right === -1 && left !== -1){ // "l"만 존재
        return str_list.slice(0, left);
    } else if(left === -1 && right !== -1){ // "r"만 존재
        return str_list.slice(right+1);
    }
    if(left < right){
        return str_list.slice(0, left);
    } else if(left > right) {
        return str_list.slice(right+1);
    } else {
        return [];
    }
}