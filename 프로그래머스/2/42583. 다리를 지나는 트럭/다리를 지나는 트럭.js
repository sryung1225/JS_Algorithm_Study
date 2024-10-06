function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridgeQueue = [[0, 0]];
    let weightOnBridge = 0;
    
    while(bridgeQueue.length > 0 || truck_weights.length > 0){
        if(bridgeQueue[0][1] === answer){
            weightOnBridge -= bridgeQueue.shift()[0];
        }
        if(weightOnBridge + truck_weights[0] <= weight){
            weightOnBridge += truck_weights[0];
            bridgeQueue.push([truck_weights.shift(), answer + bridge_length]);
        } else {
            if (bridgeQueue[0]) {
                answer = bridgeQueue[0][1] - 1;
            }
        }
        answer++;
    }
    return answer;
}