function solution(friends, gifts) {
    // 선물 지수 객체 giftDegree
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
    
    // 다음 달 선물 받는 갯수를 저장하는 객체 nextGift
    const nextGift = {};
    friends.forEach(v => {
        nextGift[v] = 0;
    })
    
    // 선물을 주고받은 기록을 순환하며 다음 달 선물 증정
    // 모든 친구 관계를 순환. 같은 관계 내 다중 선물 교환 기록은 제 때 제거하며 반복 방지
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
    
    // 다음달에 가장 많은 선물을 받는 친구
    const answer = Math.max(...Object.values(nextGift));
    return answer;
}