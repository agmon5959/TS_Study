package study.dynamicProgram;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수
// 아래 그림은 2×17 직사각형을 채운 한가지 예이다.
// 최종제출
public class BOJ_11727_2xN_타일링2 {
    static long mod = 10007;
    static int N;
    static long[] D;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        D = new long[1001];

        D[1] = 1;   // 길이가 2*1 일 때 타일의 경우의 수
        D[2] = 3;   // 길이가 2*3 일 때 타일의 경우의 수

        for (int i = 3; i <= N; i++) {
//            D[i] = (D[i - 1] + D[i - 2]) % mod;
            D[i] = (D[i - 1] + D[i - 2] * 2) % mod;
        }

        System.out.println(D[N]);

    }
}
