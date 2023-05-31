function solution(brown, yellow) {
    for(let h=3; h<=brown; h++){
        let w = Math.floor((brown+yellow)/h);
        if(yellow === (w-2)*(h-2)){
            return [w, h];
        }
    }
    return "Can't find";
}