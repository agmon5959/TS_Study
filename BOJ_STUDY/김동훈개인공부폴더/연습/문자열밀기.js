function solution(A, B) {
    let result = 0;
    let A_arr = [...A];
    let B_arr = [...B];
    let length = B_arr.length;

    if (A === B) {
        return 0;
    }

    for (let i = 0; i < length; i++) {
        A_arr.unshift(A_arr.pop());
        A_arr.join('');
        result++;
        if (A_arr.join('') === B_arr.join('')) {
            return result;
            break;
        }
    }

    return -1;

}