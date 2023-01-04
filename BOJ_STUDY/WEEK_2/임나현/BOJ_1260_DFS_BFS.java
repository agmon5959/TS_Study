package study.DFSBFS;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

//  dfs - 스택 자료구조/ 재귀함수 활용
//  bfs - 큐 자료구조/ 요소를 queue에 추가하면서 반복문 돌기
// 깊이 우선 탐색(DFS)와 너비 우선 탐색(BFS) 알고리즘
public class BOJ_1260_DFS_BFS {
    static int n, m, v;		    // n정점, m간선
    static int map[][];  // 각 정점간 탐색 경로를 저장할 배열 . 각 정점간 탐색 경로 저장 : 노드 연결상태를 나타내는 2차원 인접행렬
    static boolean visited[];	// 정점 탐색여부 체크
    static StringBuilder sb = new StringBuilder();


    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken()); // 정점의 개수(정점)
        m = Integer.parseInt(st.nextToken()); // 간선의 개수(간선)
        v = Integer.parseInt(st.nextToken());

        map = new int[n+1][n+1];    // 각 정점간 탐색 경로를 저장할 배열
        visited = new boolean[n+1]; // 방문 배열 초기화

//        for(int i=0; i<m; i++) {
//            for (int j = 0; j < n + 1; j++) {
//                System.out.print('0');
//            }
//            System.out.println();
//        }

        // 번호가 작은 것을 먼저 방문하기 위해 정렬
//        for (int i = 0; i < n; i++){
//            map[i][i] = i;
//        }

        // 인접행렬
        for (int i = 0; i < m; i++){
            StringTokenizer str = new StringTokenizer(br.readLine());

            int a = Integer.parseInt(str.nextToken());
            int b = Integer.parseInt(str.nextToken());

            map[a][b] = map[b][a] = 1;

        }

        dfs(v);
        sb.append("\n");
        System.out.println();
        visited = new boolean[n+1]; // 방문 배열 초기화

        // DFS 완료되면 방문 배열 초기화 진행
//        Arrays.fill(visited, false);

        bfs(v);
        System.out.println(sb);

        br.close();

    }

    private static void dfs(int node) {
        visited[node] = true;
        System.out.println(node + " ");

        for (int i = 0; i <= n; i++){
            if (map[node][i] == 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    private static void bfs(int node) {
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(node);
        visited[node] = true;
        System.out.println(node + " ");

        while (!q.isEmpty()){
            node = q.poll();
            sb.append(node + " ");
            System.out.println("node" + node);

            for (int i=1; i < map.length; i++){
                if(map[node][i] == 1 && !visited[i]) {
                    q.add(i);
                    visited[i] = true;
                    System.out.println(i + " ");
                }
            }
        }
    }
}
