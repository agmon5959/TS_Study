const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = Number(input[0]);
const realAns = [];
const ans = [];
for (let i = 1; i <= N; i++) {
    ans.push(Number(input[i]));
}
// 다이나믹 테이블
const dy = Array.from({ length: N + 1 });
dy[0] = 0;
dy[1] = 1;
dy[2] = 2;
dy[3] = 4;


ans.forEach((iter) => {
    if (iter > 3) {
        for (let i = 4; i <= iter; i++) {
            // 점화식
            dy[i] = (dy[i - 3] + dy[i - 2] + dy[i - 1]);
        }
        
    }
    realAns.push(dy[iter]);
})
console.log(realAns.join(`\n`));