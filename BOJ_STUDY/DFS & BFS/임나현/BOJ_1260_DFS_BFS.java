package study.DFSBFS;

import java.io.*;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

//  dfs - 스택 자료구조/ 재귀함수 활용
//  bfs - 큐 자료구조/ 요소를 queue에 추가하면서 반복문 돌기
// 깊이 우선 탐색(DFS)와 너비 우선 탐색(BFS) 알고리즘
public class BOJ_1260_DFS_BFS {
    static int n, m;		    // n정점, m간선
    static int start;	        // 시작
    static int map[][];  // 각 정점간 탐색 경로를 저장할 배열 . 각 정점간 탐색 경로 저장 : 노드 연결상태를 나타내는 2차원 인접행렬
    static boolean visited[];	// 정점 탐색여부 체크


    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());   // 정점의 개수(정점)
        m = Integer.parseInt(st.nextToken());   // 간선의 개수(간선)

        visited = new boolean[n+1]; // 방문 배열 초기화

        map = new int[n+1][n+1];    // 각 정점간 탐색 경로를 저장할 배열

        // 번호가 작은 것을 먼저 방문하기 위해 정렬
        for (int i = 0; i <= n; i++){
            map[i][i] = i;
        }

        // 인접행렬
        for (int i = 0; i <= m; i++){
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            map[s][e] = 1;
            map[e][s] = 1;

        }

        dfs(1);
        System.out.println("start" + start);
        bfs(1);
        System.out.println("start" + start);

        br.close();

    }

    private static void dfs(int node) {
        System.out.println("node" + node);
        visited[node] = true;

        for (int i =1; i<=n; i++){
            if (!visited[i]){
                dfs(i);
            }
        }
    }

    private static void bfs(int node) {
        Queue<Integer> q = new LinkedList<Integer>();

        q.offer(node);
        visited[node] = true;

        while (!q.isEmpty()){
            int temp = q.poll();
            System.out.println("temp" + temp);

            for (int k=1; k<=m; k++){
                if(map[temp][k] == 1 && visited[k] == false) {
                    q.offer(k);
                    visited[k] = true;
                    q.add(k);
                }
            }
        }
    }
}
