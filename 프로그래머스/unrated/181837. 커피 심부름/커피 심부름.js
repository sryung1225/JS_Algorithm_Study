function solution(order) {
    let answer = 0;
    order.forEach(v => {
        switch(v){
            case "iceamericano":
            case "americanoice":
            case "hotamericano":
            case "americanohot":
            case "americano":
            case "anything":
                answer += 4500;
                break;
            case "icecafelatte":
            case "cafelatteice":
            case "hotcafelatte":
            case "cafelattehot":
            case "cafelatte":
                answer += 5000;
        }
    })
    return answer;
}