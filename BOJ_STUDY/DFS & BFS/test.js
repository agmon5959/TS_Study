let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const len = input.shift();
const comCnt = input.shift();
//! 처음 풀 때는 순차적으로 진행되는 상황만 고려하여 틀렸음.

const set = new Set(['1']); // 1번 컴퓨터는 무조건 감염되어있음.

for (let i = 0; i < len; i++) {
    if (!input[i]) { continue; }
    const first = input[i].split(' ')[0];
    const second = input[i].split(' ')[1];

    if (set.has(first) || set.has(second)) {
        set.add(first);
        set.add(second);
    }
}


console.log(set.size - 1); // 1번 컴퓨터는 제외.