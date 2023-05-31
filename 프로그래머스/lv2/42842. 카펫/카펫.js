function solution(brown, yellow) {
    for(let h=1; h<=brown; h++){
        for(let w=h; w<=brown; w++){
            let yellowSize = (h === 0) ? w-2 : (w-2)*(h-2);
            if(brown === (w*h - yellowSize) && yellow === yellowSize){
                return [w, h];
            }
        }
    }
    return "Can't find";
}