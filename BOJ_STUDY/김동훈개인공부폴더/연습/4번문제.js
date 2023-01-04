/** 
 * ! 출제의도는 DP인 것 같긴함 .. 
 * ? 자연수 N을 이진수로 변환했을 때 나오는 1의 개수를 k라고 했을 때 N보다 작은 자연수 중에서 이진법으로 변환하여 
 * ? 1의 개수가 K인 수가 몇 개 있는지를 return 하도록 solution 함수를 완성해 주세요.
 * 
 * ? 제한사항 n은 1<= N 2^30 // 숫자가 너무 너무 크니까 탐색은 아니겠다 .. ! 
 * ? n = 9 일 때 resulut = 3
 **/

function solution(n) {
    const factorial = (n, r) => {
        let sum = 1;
        for (let i = r; i <= num; i++) {
            sum *= i;
        }
        return sum;
    }

    const nCr = (n, r) => {
        r = Math.min(r, n - r)
        return factorial(n, r) / (factorial(n - r));
    }
    const count_one = (bin_str) => {
        let k = 0;
        let bin_arr = [...bin_str];
        for (let i = 0; i < bin_arr.length; i++) {
            if (bin_arr[i] === '1') {
                k++;
            }
        }
        return k;
    }

    let n_bin_str = n.toString(2);
    let n_bin_length = n_bin_str.length;

    let low_n_bin_length = n_bin_length - 1;
    let k = count_one(n_bin_arr);

    // n_bin_lenght: 주어진 n의 이진 수의 자릿 수
    // n_bin_str: 주어진 n의 이진 수 
    // k: 주어진 n(2)에서 등장한 1의 횟수
    // nCr =>  n(len) , r(cnt)

    let low_count = nCr(low_n_bin_length, k);
    let low_n = parseInt(('1' * low_n_bin_length).toString(10));
    for (let i = n - 1; i > low_n; i--){
        low_k = count_one(i)
        if (low_k == k) {
            low_count += 1;
        }
    }
    return low_count;
}
