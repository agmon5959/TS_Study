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
console.log(numberOfCase);
const ansArr = [];

for (let i = 0; i < numberOfCase.length / 2; i++) {

    let startTeam = permutation(2, numberOfCase[i]);
    let linkTeam = permutation(2, numberOfCase[numberOfCase.length - (i + 1)]);


    let startSum = 0;
    let linkSum = 0;
    for (let j = 0; j < startTeam.length; j++) {
        let sx = startTeam[j][0] - 1;
        let sy = startTeam[j][1] - 1;

        let lx = linkTeam[j][0] - 1;
        let ly = linkTeam[j][1] - 1;

        startSum += map[sx][sy];
        startSum += map[sy][sx];

        linkSum += map[lx][ly];
        linkSum += map[ly][lx];
    }
    ansArr.push([startSum, linkSum]);
}

let minValue = Number.MAX_SAFE_INTEGER;
ansArr.forEach((iter) => {
    let target = Math.abs(iter[0] - iter[1]);
    if (target < minValue) {
        minValue = target;
    }
})
console.log(minValue);