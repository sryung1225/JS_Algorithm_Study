function solution(friends, gifts) {
    let num = friends.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});
    let arr = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    
    gifts.forEach((gift) => {
        const [from, to] = gift.split(" ");
        arr[num[from]][num[to]]++;
        arr[num[to]][num[from]]--;
        arr[num[from]][num[from]]++;
        arr[num[to]][num[to]]--;
    })
    
    let nextGifts = Array(friends.length).fill(0);
    for(let i=0; i<friends.length; i++){
        for(let j=i+1; j<friends.length; j++){
            if(arr[i][j] > 0) nextGifts[i]++;
            else if(arr[i][j] < 0) nextGifts[j]++;
            else {
                if(arr[i][i] > arr[j][j]) nextGifts[i]++;
                else if(arr[i][i] < arr[j][j]) nextGifts[j]++;
            }
        }
    }
    
    return Math.max(...nextGifts);
}