const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const [N, M] = input[0].split(" ").map(e => +e);
const matrix = input[1].split(" ").map(e => +e);
const remain = Array.from({ length: M }).fill(0);

let ans = 0;

for (let i = 0; i < N; i++) {
    if (i === 0) continue;
    matrix[i] += matrix[i - 1];   
}


for (let i = 0; i < N; i++) {
    remain[matrix[i] % M]++;
    if (matrix[i] % M === 0) ans++;
}

for (let cnt of remain) {
    ans += cnt * (cnt - 1) / 2;
}

console.log(ans);