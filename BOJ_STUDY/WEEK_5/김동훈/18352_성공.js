const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
let [N, M, K, X] = input[0].split(" ").map(Number);
let v = Array.from({ length: N + 1 }, () => Array());
let dp = new Array(N + 1).fill(987654321);
let ans = false;

for (let i = 0; i < M; i++) {
    let [x, y] = input[i + 1].split(" ").map(Number);
    v[x].push(y);
}

function bfs() {
    let q = [X];
    dp[X] = 0;
    while (q.length !== 0) {
        let cur = q.shift();
        v[cur].map((next) => {
            let cost = dp[cur] + 1;
            if (dp[next] > cost && cost <= K) {
                dp[next] = cost;
                q.push(next);
            }
        });
    }
}
bfs();

for (let i = 1; i <= N; i++) {
    if (dp[i] == K) {
        console.log(i);
        ans = true;
    }
}
if (!ans) {
    console.log(-1);
}