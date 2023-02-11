function solution(s){
    let count = {
        p: 0,
        y: 0
    };
    s = s.toLowerCase().split('');
    s.forEach(function(a){
        if(a === 'p') count.p += 1;
        if(a === 'y') count.y += 1;
    })
    return count.p === count.y;
}