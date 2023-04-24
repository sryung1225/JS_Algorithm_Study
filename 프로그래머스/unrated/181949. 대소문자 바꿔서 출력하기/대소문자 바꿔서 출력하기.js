const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const arr = str.split("");
    let answer = []; 
    for(let i of arr){
        if(i.toUpperCase() === i) answer.push(i.toLowerCase());
        else answer.push(i.toUpperCase());
    }
    console.log(answer.join(""));
});