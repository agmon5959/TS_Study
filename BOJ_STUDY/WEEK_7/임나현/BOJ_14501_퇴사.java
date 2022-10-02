package study.dynamicProgram;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 동적 계획법(Dynamic Programming)
// 완전 탐색을 통해서 푸는 방법 재귀 함수
// 피보나치 수열 공식
// D[N] = D[N - 1] + D[N - 2] // N번째 수열 = N - 1번째 수열 + N - 2번째 수열
// 큰 문제를 작은 문제로 나눌 수 있어야 한다.
// 작은 문제들이 반복돼 나타나고 사용되며 이 작은 문제들의 결괏값은 항상 같아야 한다.
// 모든 작은 문제들은 한 번만 계산해 DP 테이블에 저장하며 추후 재사용할 때는 이 DP 테이블을 이용한다. 이를 메모이제이션 기법이라고 한다.
// 동적 계획법은 톱-다운 방식과 바텀-업 방식으로 구현할 수 있다.

// 점화식 방식
// 1차원 형태, 의미 도출 점화식(D[i]) = 1번째 날부터 퇴사날까지 벌 수 있는 최대 수입
// D[i] = D[i] + 1 -> 오늘 시작되는 상담을 했을 때 퇴사일가지 끝나지 않는 경우
// D[i] = MAX(D[i + 1], D[i + T[i]] + P[i]) -> 오늘 시작되는 상담을 했을 때 퇴사일 안에 끝나는 경우
// 점화식을 이용해 D배열을 채웁니다.
public class BOJ_14501_퇴사 {
    static int N;
    static int[] D, T, P;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        N = Integer.parseInt(br.readLine());
        // D(점화식 배열 -> i ~ 퇴사일까지 벌 수 있는 최대 수입을 저장하기)
        D = new int[N+2];   // 오늘부터 퇴사일까지 벌 수 있는 최대 수입
        // T(상담에 필요한 일 수 저장 배열)
        T = new int[N+1];
        // P(상담을 완료했을 때 받는 수입 저장 배열)
        P = new int[N+1];

        // N만큼 반복 T와 P배열 입력
        for (int i = 1; i <= N; i++) {
            T[i] = Integer.parseInt(st.nextToken());
            P[i] = Integer.parseInt(st.nextToken());
        }

        // i -> N ~ 1까지 반복
        for (int i = N; i > 0; i--) {
            if (i + T[i] > N + 1) { // i번째 상담을 퇴사일까지 끝낼 수 없을 때
                D[i] = D[i + 1];    // D[i] i + 1일 ~ 퇴사일에 벌 수 있는 최대 수입
            } else {    // i번째 상담을 퇴사일까지 끝낼 수 있을 때
                // D[i] = MAX(i + 1일 ~ 퇴사일에 벌 수 있는 최대 수입과 i번째 상담 비용 + i번째 상담이 끝난 다음 날부터 퇴사일까지의 최대 수입)
                D[i] = Math.max(D[i + 1], P[i] + D[i + T[i]]);
            }
        }

        System.out.println(D[1]);

    }
}
