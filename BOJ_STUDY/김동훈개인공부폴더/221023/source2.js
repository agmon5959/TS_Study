const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = Number(input.shift());
let cnt = 0;

const countingNum = (num) => {
    if (String(num).includes(String(3))) {
        return 1;
    } else {
        return 0;
    }
}

for (let i = 0; i <= N; i++){
    for (let j = 0; j < 60; j++){
        for (let k = 0; k < 60; k++){
            if ((countingNum(i) + countingNum(j) + countingNum(k)) >= 1) {
                cnt++;
            }
        }
    }
}


console.log(cnt);