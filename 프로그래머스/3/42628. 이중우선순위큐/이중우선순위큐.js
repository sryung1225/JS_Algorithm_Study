function solution(operations) {
    let queue = [];
    operations.forEach((operation) => {
        const [command, value] = operation.split(" ");
        if(command === "I") {
            queue.push(Number(value));
            queue.sort((a, b) => b - a);
        } else if(command === "D" && value === "1"){
            queue.shift(); 
        } else if(command === "D" && value === "-1"){
            queue.pop();
        }
    })
    if(queue.length === 0) return [0, 0];
    return [queue[0], queue[queue.length - 1]];
}