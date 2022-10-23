const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = input.shift();
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
}

let target = [obj[N[0]], Number(N[1])];

const move = [[2, 1], [2, -1], [-2, 1], [-2, -1]];
const ans = [];
for (let i = 0; i < move.length; i++){
    ans.push([(target[0] + move[i][0]), (target[1] + move[i][1])]);
    ans.push([(target[1] + move[i][0]), (target[0] + move[i][1])]);
}
let cnt = 0;
ans.forEach((iter) => {
    if ((iter[0] >= 1 && iter[1] >= 1) && (iter[0]<=8 && iter[1]<=8)) cnt++;
})

console.log(cnt);