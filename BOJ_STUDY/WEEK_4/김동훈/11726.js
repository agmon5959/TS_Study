const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = Number(require("fs").readFileSync(filePath).toString().trim().split("\n"));
// 다이나믹 테이블
const dy = Array.from({ length: input + 1 });
dy[0] = 0;
dy[1] = 1;
dy[2] = 2;
if (input > 2) {
    for (let i = 3; i <= input; i++) {
        // 점화식
        dy[i] = (dy[i - 2] + dy[i - 1]) % 10007;
    }
}
console.log(dy[input]);