class Queue {
    items = [];
    front = 0;
    rear = 0;
    sum = 0;
    size() {
        return this.rear - this.front;
    }
    pop() {
        this.sum -= this.items[this.front];
        return this.items[this.front++];
    }
    push(item) {
        this.sum += item;
        this.rear++
        this.items.push(item);
    }
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    let truckIndex = 0;
    const bridgeQueue = new Queue();
    
    while(truckIndex <= truck_weights.length - 1 || bridgeQueue.sum !== 0){
        answer++;
        if(bridgeQueue.size() >= bridge_length){
           bridgeQueue.pop(); 
        }
        const truck = truck_weights[truckIndex];
        if(truck + bridgeQueue.sum <= weight) {
            truckIndex++;
            bridgeQueue.push(truck);
        } else {
            bridgeQueue.push(0);
        }
    }
    return answer;
}