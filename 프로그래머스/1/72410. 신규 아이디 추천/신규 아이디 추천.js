function solution(new_id) {
    const s = "abcdefghijklmnopqrstuvwxyz0123456789-_.";
    let id1 = new_id.toLowerCase();
    let id2 = id1.split("").filter((v) => s.includes(v));
    let id3 = '';
    for(let i=0; i<id2.length; i++){
        if(id2[i] === "." && id2[i+1] === ".") continue;
        id3 += id2[i];
    }
    let id4_1 = id3[0] === "." ? id3.slice(1) : id3;
    let id4_2 = id4_1[id4_1.length - 1] === "." ? id4_1.slice(0, id4_1.length - 1) : id4_1;
    let id5 = id4_2.length === 0 ? "a" : id4_2;
    let id6_1 = id5.slice(0, 15);
    let id6_2 = '';
    for(let i=id6_1.length - 1; i>=0; i--){
        if(id6_1[i] !== "."){
            id6_2 = id6_1.slice(0, i+1);
            break;
        }
    }
    let answer = id6_2;
    if(answer.length <= 2){
        while(answer.length < 3){
            answer += answer[answer.length - 1];
        }
    }
    return answer;
}