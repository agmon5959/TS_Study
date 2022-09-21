const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const [row, col] = input.shift().split(" ").map(e=>+e);
const map = input.map((iter) => iter.split(" ").map(e => +e));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// const visit = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
// const block = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

console.log(map);