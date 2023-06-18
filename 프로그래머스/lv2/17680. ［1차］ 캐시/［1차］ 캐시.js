function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;
    cities.forEach(city => {
        city = city.toUpperCase();
        if(!cache.includes(city)){
            cache.unshift(city);
            answer += 5;
        } else {
            let idx = cache.indexOf(city);
            cache = cache.slice(0, idx).concat(cache.slice(idx+1));
            cache.unshift(city);
            answer += 1;
        }
        if(cache.length > cacheSize)
            cache.pop();
    })
    return answer;
}