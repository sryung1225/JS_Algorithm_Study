function solution(n, arr1, arr2) {
    let answer = [];
    let con1, con2, str; // string 선언은 생략 가능
    for(let i=0; i<n; i++){
        con1 = arr1[i];
        con2 = arr2[i];
        str = "";
        for(let j=0; j<n; j++){
            str = (con1%2 + con2%2) ? "#"+str : " "+str;
            con1 = Math.floor(con1/2);
            con2 = Math.floor(con2/2);
        }
        answer.push(str);
    }
    return answer;
}