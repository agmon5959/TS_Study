package study.dynamicProgram;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 동적 계획법
// 피보나치 수열 공식
// D[N] = D[N - 1] + D[N - 2] // N번째 수열 = N - 1번째 수열 + N - 2번째 수열
// 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
// 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.
public class BOJ_11726_2xN_타일링 {
    static long mod = 10007;
    static int N;
    static long[] D;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        D = new long[1001];

        D[1] = 1;   // 길이가 2*1 일 때 타일의 경우의 수
        D[2] = 2;   // 길이가 2*2 일 때 타일의 경우의 수

        for (int i = 3; i <= N; i++) {
            D[i] = (D[i - 1] + D[i - 2]) % mod;
        }

        System.out.println(D[N]);

    }
}