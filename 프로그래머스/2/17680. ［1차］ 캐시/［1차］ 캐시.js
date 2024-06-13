function solution(cacheSize, cities) {
    let queue = [];
    let answer = 0;
    cities.forEach((city) => {
        city = city.toUpperCase();
        const idx = queue.indexOf(city);
        if(idx === -1){
            answer += 5;
        } else {
            answer += 1;
            queue.splice(idx, 1);
        }
        queue.push(city);
        if(queue.length > cacheSize){
            queue.shift();
        }
    })
    return answer;
}