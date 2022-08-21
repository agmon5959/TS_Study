const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = Number(require("fs").readFileSync(filePath).toString().trim().split("\n"));