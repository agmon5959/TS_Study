const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));

input = Number(input);
var arr = [0, 1, 2];
if (input > 2) {
    for (var i = 3; i <= input; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
    }
}
console.log(arr[input]);