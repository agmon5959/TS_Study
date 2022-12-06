function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (let i = 0; i < ingredient.length; ++i) {
        stack.push(ingredient[i]);

        if (stack.length < 4) continue;

        if (stack[stack.length - 4] === 1
            && stack[stack.length - 3] === 2
            && stack[stack.length - 2] === 3
            && stack[stack.length - 1] === 1) {
            for (let j = 0; j < 4; ++j) {
                stack.pop();
            }
            count++;
        }
    }

    return count;
}