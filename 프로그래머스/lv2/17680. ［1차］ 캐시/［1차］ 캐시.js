function solution(cacheSize, cities) {
    const MISS = 5;
    const HIT = 1;
    let cache = [];
    let answer = 0;
    cities.forEach(city => {
        city = city.toUpperCase();
        let idx = cache.indexOf(city);
        if(idx === -1){
            cache.unshift(city);
            answer += MISS;
        } else {
            cache = cache.slice(0, idx).concat(cache.slice(idx+1));
            cache.unshift(city);
            answer += HIT;
        }
        if(cache.length > cacheSize)
            cache.pop();
    })
    return answer;
}