function solution(friends, gifts) {
    // 선물 지수 객체 giftDegree
    const giftDegree = Object.fromEntries(friends.map(v => [v, 0]));
    const arrayGifts = [...gifts].map(v => v.split(" "));
    arrayGifts.forEach(v => {
        giftDegree[v[0]] += 1;
        giftDegree[v[1]] -= 1;
    })
    
    // 다음 달 선물 받는 갯수를 저장하는 객체 nextGift
    const nextGift = Object.fromEntries(friends.map(v => [v, 0]));
    
    // 모든 친구관계를 순환. 선물을 주고받은 기록을 확인하며 다음 달 선물 증정
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
                } else if(giftsArr[k] === revStr){
                    count--;
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