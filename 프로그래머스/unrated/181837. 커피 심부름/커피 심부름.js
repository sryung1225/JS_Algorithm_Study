function solution(order) {
    return order.reduce((acc, cur) => {
        if (cur.includes("americano"))
            return acc + 4500;
        else if (cur.includes("cafelatte"))
            return acc + 5000;
        else if (cur === "anything")
            return acc + 4500;
    }, 0);
}