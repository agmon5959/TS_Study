function solution(number, limit, power) {
    function getDivisor(number) {
        let n = number;
        let sqrt = Math.sqrt(n);
        let arr = [];

        for (let i = 1; i <= sqrt; i++) {
            if (n % i === 0) {
                arr.push(i);
                if (n / i !== i) {
                    arr.push(n / i);
                }
            }
        }
        return arr.length;
    }


    const arr = []
    let sum = 0;

    for (let i = number; i > 0; i--) {
        arr.push(getDivisor(i));
    }
    arr.forEach((iter) => {
        if (iter > limit) {
            sum += power;
        } else {
            sum += iter;
        }
    })

    return sum;
}