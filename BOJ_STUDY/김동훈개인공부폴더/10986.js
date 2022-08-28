const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const [N, M] = input[0].split(" ").map(e => +e);
const matrix = input[1].split(" ").map(e => +e);
const remain = Array.from({ length: M }).fill(0);


remain[0]++;  // 초기값 설정해주기, 이거 없으면 NAN
remain[matrix[0] % M]++;


// console.log('remain >> ',remain);
// console.log('matrix >> ',matrix);
for (let i = 0; i < N; i++) {
    if (i === 0) continue;
    matrix[i] += matrix[i - 1];
    // console.log(matrix[i] % M);
    remain[matrix[i] % M]++;
}

let ans = 0;
console.log(remain);
for (let cnt of remain) {
    ans += cnt * (cnt - 1) / 2;
}


// console.log(matrix);
// console.log(remain);
console.log(ans);