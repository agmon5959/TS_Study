const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const [N, M] = input[0].split(" ").map(e => +e);
const matrix = input[1].split(" ").map(e => +e);
let ans = 0;

const prefixSum = Array.from({ length: N + 1 }).fill(0);

for (let i = 0; i < N; i++) {
    prefixSum[i + 1] = prefixSum[i] + matrix[i];
}


for (let i = 0; i <M; i++) {
    prefixSum[i] = matrix[i] % M;
}

let temp_0 = 0;
let temp_1 = 0;
prefixSum.forEach((iter) => {
    if (iter === 1) {
        temp_1++;
    } else {
        temp_0++;
    }
})

ans += temp_0 * (temp_0 - 1) / 2;
ans += temp_1 * (temp_1 - 1) / 2;

console.log(ans);