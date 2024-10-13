function combi(arr, n) {
    if(n === 1) return arr.map((v) => [v]);
    const result = [];
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combis = combi(rest, n - 1).map((v) => [fixed, ...v]);
        result.push(...combis);
    });
    return result;
}

function solution(orders, course) {
    const answer = [];
    course.forEach((c) => {
        const menu = [];
        orders.forEach((order) => {
            const comb = combi(order.split("").sort(), c);
            menu.push(...comb);
        });
        const counter = {};
        menu.forEach((m) => {
            const key = m.join('');
            counter[key] = (counter[key] || 0) + 1;
        });
        const max = Math.max(...Object.values(counter));
        if(max > 1){
            for(const [key, value] of Object.entries(counter)){
                if(value === max){
                    answer.push(key);
                }
            }
        }
    });
    return answer.sort();
}