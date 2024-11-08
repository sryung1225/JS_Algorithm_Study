function solution(operations) {
    let queue = [];
    operations.forEach((oper) => {
        switch(oper){
            case "D 1":
                const max = Math.max(...queue);
                queue.splice(queue.indexOf(max), 1);  
                break;
            case "D -1":
                const min = Math.min(...queue);
                queue.splice(queue.indexOf(min), 1);
                break;
            default:
                queue.push(Number(oper.split(" ")[1]));
        }
    })
    
    if(queue.length === 0) return [0, 0];
    return [Math.max(...queue), Math.min(...queue)];
}