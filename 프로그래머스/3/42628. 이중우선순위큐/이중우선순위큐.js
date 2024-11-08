function solution(operations) {
    let queue = [];
    operations.forEach((operation) => {
        const [command, value] = operation.split(" ");
        if(command === "I") {
            queue.push(Number(value));
        } else if(command === "D" && value === "1"){
            const max = Math.max(...queue);
            queue.splice(queue.indexOf(max), 1);  
        } else if(command === "D" && value === "-1"){
            const min = Math.min(...queue);
            queue.splice(queue.indexOf(min), 1);
        }
    })
    if(queue.length === 0) return [0, 0];
    return [Math.max(...queue), Math.min(...queue)];
}