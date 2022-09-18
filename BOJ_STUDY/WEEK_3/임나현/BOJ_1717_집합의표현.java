package study.graph.unionFind;

import java.io.*;
import java.util.StringTokenizer;

// 여러 노느가 있을 때 특정 2개의 노드를 연결해 1개의 집합으로 묶는 union
// 같은 집합에 속해 있는지 확인하는 find 연산
public class BOJ_1717_집합의표현 {
    static int N, M;
    static int[] parent;

    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        // 1 ~ N 까지의 int 배열
        parent = new int[N + 1];    // parent 요소
        // parent 초기화
        // 대표 노드를 자기 자신으로 초기화 하기
        for (int i = 1; i <= N; i++){
            parent[i] = i;
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < M; i++){
            st = new StringTokenizer(br.readLine());
            int command = Integer.parseInt(st.nextToken());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            // 집합 확인 : 합집합일 경우 union
            if (command == 0){
                // a와 b가 같은 집합에 포함되어 있는지를 확인하는 연산 a와 b는 n 이하의 자연수 또는 0이며 같을 수도 있다
                union(a, b);    // 집합 합집
            } else if (command == 1){   // 같은 집합이면 find
                sb.append((isSomeParent(a, b) ? "YES" : "NO") + "\n");
            } else {
                continue;
            }
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();

    }

    // b의 부모를 a의 부모를 치환하는 연산 (a > b 일 경우, 반대)
    // 매개변수로 받은 원소 a와 b를 같은 그래프로 합치는 함수
    // union 연산 : 대표 노드끼리 연결
    private static void union(int a, int b) {
        a = find(a);
        b = find(b);

        if (a != b){
            if (a < b){
                parent[b] = a;
            } else {
                parent[a] = b;
            }
        }
    }

    // a의 부모를 찾는 연산
    // find 연산
    public static int find(int a){
        if (a == parent[a]){
            return a;
        }

        return parent[a] = find(parent[a]);
    }

    // x와 y의 부모가 같은지 확인
    // 두 원소가 같은 집합인지
    private static boolean isSomeParent(int a, int b) {
        a = find(a);
        b = find(b);

        if (a == b) {
            return true;
        }
        return false;
    }
}
