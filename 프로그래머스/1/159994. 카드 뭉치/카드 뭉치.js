class Queue {
    items = [];
    front = 0;
    rear = 0;
    constructor(array) {
        this.items = array;
        this.rear = array.length;
    }
    pop() {
        return this.items[this.front++];
    }
    first() {
        return this.items[this.front];
    }
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(cards1, cards2, goal) {
    const cardsQueue1 = new Queue(cards1);
    const cardsQueue2 = new Queue(cards2);
    const goalQueue = new Queue(goal);
    
    while(!goalQueue.isEmpty()){
        if(!cardsQueue1.isEmpty() && cardsQueue1.first() === goalQueue.first()){
            cardsQueue1.pop();
            goalQueue.pop();
        } else if(!cardsQueue2.isEmpty() && cardsQueue2.first() === goalQueue.first()){
            cardsQueue2.pop();
            goalQueue.pop();
         } else {
             return "No";
         }
    }
    return "Yes";
}