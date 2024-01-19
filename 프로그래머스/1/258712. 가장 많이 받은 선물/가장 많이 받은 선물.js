function solution(friends, gifts) {
    const giftDegree = {};
    friends.forEach(v => {
        if(!giftDegree[v]) {
            giftDegree[v] = 0;
        }
    })
    const arrayGifts = [...gifts].map(v => v.split(" "));
    arrayGifts.forEach(v => {
        giftDegree[v[0]] += 1;
        giftDegree[v[1]] -= 1;
    })
    
    // 다음 달 선물 받는 갯수
    const nextGift = {};
    friends.forEach(v => {
        nextGift[v] = 0;
    })
    
    let giftsArr = [...gifts];
    for(let i=0; i<friends.length; i++){
        for(let j=i+1; j<friends.length; j++){
            const [A, B] = [friends[i], friends[j]];
            const str = `${A} ${B}`;
            const revStr = `${B} ${A}`;
            let count = 0;
            for(let k=0; k<giftsArr.length; k++){
                if(giftsArr[k] === str){
                    count++;
                    giftsArr.splice(k, 1);
                    k--;
                } else if(giftsArr[k] === revStr){
                    count--;
                    giftsArr.splice(k, 1);
                    k--;
                }
            }
            if(count > 0){
                nextGift[A] += 1;
            } else if (count < 0){
                nextGift[B] += 1;
            } else if (count === 0 && giftDegree[A] > giftDegree[B]){
                nextGift[A] += 1;
            } else if (count === 0 && giftDegree[A] < giftDegree[B]){
                nextGift[B] += 1;
            }
        }
    }
    
    const answer = Math.max(...Object.values(nextGift));
    return answer;
}



