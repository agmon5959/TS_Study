const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const inputArr = input.map(iter => iter.split(' ').map(e => +e))
let N = 0;
const maxArr = []; // 최소값이 담긴다.

inputArr.forEach((iter) => {
    N = iter.shift();
    let target = iter[0];

    let p1 = 0;
    let p2 = 0;
    let width = 1;
    let height = 0;

    let maxValue = Math.max(N, ...iter);
    for (let i = 1; i < N; i++){    
        
        if (target <= iter[i]) {
            
        } else {
            
        }
    }

    
})
console.log(maxArr);