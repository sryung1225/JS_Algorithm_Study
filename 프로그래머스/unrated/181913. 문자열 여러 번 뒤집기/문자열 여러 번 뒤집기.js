function solution(my_string, queries) {
    let tmp = [];
    my_string = my_string.split("");
    for(let i of queries){
        for(let j=i[1]; j>=i[0]; j--){
            tmp.push(my_string[j]);
        }
        my_string.splice(i[0], tmp.length, tmp.join(""));
        my_string = my_string.join("").split("");
        tmp = [];
    }
    return my_string.join("");
}