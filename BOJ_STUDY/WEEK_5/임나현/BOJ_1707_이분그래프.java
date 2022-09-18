package study.graph;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

// 이분 그래프 bipartite graph
// 각 집합에 속한 노드끼리 서로 인접하지 않는 두 집합으로 그래프의 노드를 나눌 수 있을 때

// NULLPOINTERException
public class BOJ_1707_이분그래프 {
    static int N;
    static ArrayList<Integer>[] A;
    static int[] check;
    static boolean[] visited;
    static boolean IsEven;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());

        for (int i = 0; i < N; i++) {
            String[] S = br.readLine().split(" ");

            int V = Integer.parseInt(S[0]);
            int E = Integer.parseInt(S[1]);

            A = new ArrayList[V + 1];
            visited = new boolean[V + 1];
            check = new int[V + 1];
            IsEven = true;

            for (int k = 1; k < V; k++) {
                A[k] = new ArrayList<Integer>();
            }

            for (int k = 0; k < E; k++) {
                S = br.readLine().split(" ");

                int start = Integer.parseInt(S[0]);
                int end = Integer.parseInt(S[1]);

                A[start].add(end);
                A[end].add(start);
            }

            // 주어진 그래프가 1개로 연결되어 있지 않아서 모든 노드 수행
            for (int k = 1; k <= V; k++) {
                if (IsEven) DFS(k);
                else break;
            }

            check[1] = 0;
            if (IsEven) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }

        }
    }

    // DFS
    public static void DFS(int node) {
        visited[node] = true;

        for (int k : A[node]) {
            if (!visited[k]) {
                // 인접한 노드는 같은 집합이 아님, 이전 노드와 다른 집합 처리
                check[k] = (check[node] + 1) % 2;
                DFS(k);
            } else if (check[node] == check[k]){
                // 이미 방문한 노드가 현재 내 노드와 같은 집함이면 이분 그래프가 아님 처리
                IsEven = false;
            }
        }
    }
}
