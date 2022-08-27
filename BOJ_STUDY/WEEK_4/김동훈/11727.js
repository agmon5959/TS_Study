const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => {
    process.exit();
});

const main = (line) => {
    line = Number(line);
    const DP = new Array(line + 1).fill(0);
    DP[1] = 1;
    DP[2] = 3;

    for (let i = 3; i <= line; i++) {
        DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
    }
    console.log(DP[line]);
};