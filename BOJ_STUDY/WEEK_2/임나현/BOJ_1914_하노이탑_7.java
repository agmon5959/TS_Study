package study.Recursive;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.StringTokenizer;

// 제출
// 재귀호출(함수)
// 원반의 이동횟수는 2^-1 이다. 그룹 1 ~ N-1 1에서 2로
// 원반 n 1에서 3으로
// 1 ~ N-1 2에서 3으로 move
// 문제에서 원판이 20개 이상이면 경로를 출력하지 않고, 이동횟수만 출력하면 되기에 횟수를 구하는 함수와 이동경로를 구하는 함수를 두개 구현하였다.
// 원판이 100개까지 들어오기에 int, long으로는 2^32, 2^64 밖에 안되서 BigInteger를 이용하여 횟수를 구해준다.

public class BOJ_1914_하노이탑_7 {
    static int N, M;    // N개의 원반
    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());

        BigInteger bi = new BigInteger("2");

        bi = bi.pow(N);
        bi = bi.subtract(BigInteger.ONE);

        System.out.println(bi);

        if(N <= 20){
            move(N,1,2,3);
            System.out.print(sb.toString());
        }
    }

    static void move(int N, int a, int b, int c) {
        if(N <= 0) {
            return;
        }
        move(N - 1, a, c, b);

        sb.append(a + " " + c + "\n");

        move(N - 1, b, a, c);
    }
}
