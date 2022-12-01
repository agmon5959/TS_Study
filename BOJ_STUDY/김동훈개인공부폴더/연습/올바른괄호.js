function solution(s) {
    const arr = [];
    const target = [...s];
    const length = target.length;
    let temp = '';

    if (target[0] === ")") return false;

    for (let item of target) {
        if (item === "(") {
            arr.push(item);
        } else if (item === ")" && arr.length > 0) {
            temp = arr.pop();
        }
    }

    return arr.length === 0 ? true : false;
}