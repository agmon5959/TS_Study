function solution(array) {
    let result = 0;
    let str = [...array].join('');
    for (const item of str) {
        if (item === '7') {
            result++;
        }
    }
    return result;
}