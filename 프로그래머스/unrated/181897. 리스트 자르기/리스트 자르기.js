function solution(n, slicer, num_list) {
    let answer = [];
    switch(n){
        case 1: // 2,4,6,9,17 - 26.3
            answer = num_list.slice(0, slicer[1]+1);
            break;
        case 2: // 7,8,10,16,18 - 26.3
            answer = num_list.slice(slicer[0]);
            break;
        case 3:
            answer = num_list.slice(slicer[0], slicer[1]+1);
            break;
        case 4:
            answer = num_list.slice(slicer[0], slicer[1]+1);
            answer = answer.filter((v, i) => i % slicer[2] === 0);
    }
    return answer;
}