const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = input.shift();

const strArr = [];
let sum = 0;
[...N].forEach((iter) => {
    if (isNaN(Number(iter))) { // 문자
        strArr.push(iter);
    } else {    // 숫자
        sum += Number(iter);
    }
})

console.log(strArr.sort().join('') + sum);