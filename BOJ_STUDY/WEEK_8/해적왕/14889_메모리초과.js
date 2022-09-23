const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
const N = +input.shift();

const map = input.map(e => {
    return e.split(' ').map(e => +e);
})

const numberArr = [];
for (let i = 1; i <= N; i++) {
    numberArr.push(i);
}

function permutation(number, arr) {
    let ans = [];
    // 1이라면 한 개씩 반환
    if (number === 1) {
        return arr.map((dr) => [dr]);
    }
    arr.forEach((fixed, idx, origin) => {
        let rest = []; // 배열의 원소 중 하나를 고른 나머지들을 rest 변수에 담아준다.
        // 순열
        rest = origin.slice(idx + 1);
        let combination = permutation(number - 1, rest); // 나머지에 대한 조합 값
        let attached = combination.map((iter) => { // 나온 결과 값에 대해 fixed값 붙여주기
            return [fixed, ...iter];
        })
        ans.push(...attached); // 리턴 배열에 넣어주기
    });
    return ans;
}
const numberOfCase = permutation(N / 2, numberArr);
const compareArr = [];

for (let i = 0; i < numberOfCase.length; i++) {
    compareArr.push(permutation(2, numberOfCase[i]));
}

const Arr = [];
for (let i = 0; i < compareArr.length / 2; i++) {
    let x = compareArr[i];
    let y = compareArr[compareArr.length - (i + 1)];
    let sum_1 = 0;
    let sum_2 = 0;
    for (let j = 0; j < x.length; j++) {
        sum_1 += map[x[j][0] - 1][x[j][1] - 1];
        sum_1 += map[x[j][1] - 1][x[j][0] - 1];
    }
    for (let k = 0; k < y.length; k++) {
        sum_2 += map[y[k][0] - 1][y[k][1] - 1];
        sum_2 += map[y[k][1] - 1][y[k][0] - 1];
    }
    Arr.push([sum_1, sum_2]);
}

let minValue = Number.MAX_SAFE_INTEGER;
Arr.forEach((iter) => {
    let target = Math.abs(iter[0] - iter[1]);
    if (target < minValue) {
        minValue = target;
    }
})
console.log(minValue);
