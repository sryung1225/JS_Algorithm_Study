const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("");

let count = Array(26).fill(0);
input.forEach(v => {
    let ascii = v.charCodeAt();
    // A~Z: 65~90, a~z: 97~112
    if(ascii >= 97){
        ascii -= 32; // 대문자로 변환
    }
    count[ascii-65]++;
})
let max = Math.max(...count);
if(count.indexOf(max) !== count.lastIndexOf(max)){
    console.log("?");
} else {
    console.log(String.fromCharCode(count.indexOf(max)+65));
}