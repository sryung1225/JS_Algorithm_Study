function solution(my_string) {
    let answer = 0;
    let arr = [];
    for(let i=0; i<=my_string.length; i++){
        // console.log(my_string[i], isNaN(my_string[i]));
        let num = "";
        while(!isNaN(my_string[i])){
            num += my_string[i];
            i++;
        }
        if(num != "") arr.push(num);
    }
    return arr.reduce((acc,cur) => acc+Number(cur), 0);
}