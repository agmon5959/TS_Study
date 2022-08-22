const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const [house, load] = input[0].split(" ");
const path = [];
// const graph = Array.from({ length: load + 1 }).fill(0);
let graph = Array.from(Array(Number(house) + 1), () => Array());

for (let i = 1; i < input.length; i++){
    path.push(input[i].split(" ").map(e => +e));
}

path.forEach(([start, end, cost]) => {
    graph[start].push([end, cost]);
})

// 포기