function solution(s) {
    let [count, delete0] = [0, 0];
    let x = s;
    while(x !== "1"){
        count++;
        const size = x.length;
        x = x.split("0").join("");
        delete0 += size - x.length;
        x = x.length.toString(2); 
    }
    return [count, delete0];
}