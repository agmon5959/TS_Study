const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = Number(input.shift());
const map = Array.from(Array(N), () => new Array(N));

let X = 1;
let Y = 1;
console.log(input[0].length);
for (let i = 0; i < input[0].length; i++) {
    let type = input[0][i];
    console.log(type);
    switch (type) {
        case "R":
            if (N > Y) {
                Y++;
            }
            break;
        case "L":
            if (Y < 1) {
                Y--;
            }
            break;
        case "U":
            if (N === 1) {
                X--;
            }
            break;
        case "D":
            if (X < N) {
                X++;
            }
            break;
    }
}

console.log(X, Y);

