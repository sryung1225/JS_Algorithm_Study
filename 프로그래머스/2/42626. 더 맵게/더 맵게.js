// Heap 구조 사용 - JavaScript는 Heap을 직접 만들어야하기 때문에 ....
class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    // 값 넣기 + 오름차 순 정렬
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        
        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[Math.floor((currentIndex-1)/2)]) {
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[Math.floor((currentIndex-1)/2)];
            this.heap[Math.floor((currentIndex-1)/2)] = temp;
            currentIndex = Math.floor((currentIndex-1)/2);
        }
    }
    // 값 빼기 + 오름차 순 정렬
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        while (currentIndex * 2 + 1 < this.heap.length) {
            let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] 
            ? currentIndex * 2 + 2 
            : currentIndex * 2 + 1;
            if (this.heap[currentIndex] < this.heap[minChildIndex]) {
                break;
            }
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            currentIndex = minChildIndex;
        }    
        return minValue;
    }
    // 가장 작은 값
    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const food = new MinHeap();
    for (const sco of scoville) {
        food.push(sco);
    }
    let answer = 0;
    while (food.size() >= 2 && food.peek() < K) {
        const one = food.pop();
        const two = food.pop();
        const mix = one + two * 2;
        food.push(mix);
        answer++;
    }
    if(food.peek() < K) answer = -1;
    return answer;
}