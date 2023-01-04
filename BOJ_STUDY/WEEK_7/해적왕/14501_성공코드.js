const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
n = +input.shift();
const arr = Array.from({ length: n });

for (let i = 0; i < n; i++) {
    const [T, P] = input[i].split(" ");
    arr[i] = [+T, +P]
}

const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) { // 0일~6일
    const [day, benefit] = arr[i];
    if (i + day > n) continue; // 현재 날짜 + 기간이 n이 넘으면 상담 불가
    dp[i] += benefit;
    
    for (let j = i + day; j < n; j++) {
        dp[j] = Math.max(dp[j], dp[i]); // 현재 금액, i일 뒤에 받게 될 금액 비교
    }
}
console.log(Math.max(...dp));