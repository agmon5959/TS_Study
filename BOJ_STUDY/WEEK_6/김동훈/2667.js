const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const size = +input.shift();
const originMap = input;
const targetMap = Array.from(Array(size+2), () => Array(size+2).fill(0));

let cnt = 1;
console.log(originMap);
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if (originMap[i] === undefined || originMap[i][j] === undefined) continue;
        origin = +originMap[i-1][j-1];
        if (origin === 0) {
            cnt++;
        } else if(origin === 1){
            
            let up = targetMap[i - 1][j];
            if (up > 0) {
                targetMap[i][j] = up;
                continue;
            } 
            let down = targetMap[i + 1][j];
            if (down > 0) {
                targetMap[i][j] = down;
                continue;
            } 
            let left = targetMap[i][j - 1];
            if (left > 0) {
                targetMap[i][j] = left;
                continue;
            } 
            let right = targetMap[i][j + 1];
            if (right > 0) {
                targetMap[i][j] = right;
                continue;
            } 

            // 모두 0인 경우 cnt 넣어주기
            if (up + down + left + right === 0) {
                targetMap[i][j] = cnt;
            }


        }
    }
}

console.log(targetMap);