const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const size = +input.shift();
const originMap = input;
const targetMap = Array.from({ length: size } , Array.from(size));

console.log(targetMap);