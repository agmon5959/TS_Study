package study.graph;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

// 최종 제출
public class BOJ_2606_바이러스_BFS {
    static int n, m;		    // n정점, m간선
    static int map[][];	    	// 각 정점간 탐색 경로 저장 : 노드 연결상태를 나타내는 2차원 인접행렬
    static boolean explore[];	// 정점 탐색여부 체크 : 감염여부를 위한 boolean  / 배열 탐색 시장할 정점의 번호(정점)
    static int count;	        // 정점과 연결된 바이러스 걸리는 컴퓨터 수

    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());   // 컴퓨터 수(정점)
        m = Integer.parseInt(br.readLine());   // 연결된 컴퓨터 쌍의 수(간선)
        map = new int[n+1][n+1];    // 각 정점간 탐색 경로를 저장할 배열
        explore = new boolean[n+1]; // 정점의 탐색 여부 체크

        // 각 정점간 탐색 경로를 저장할 배열 , 탐색 시장할 정점
        for (int i = 0; i < n; i++){
            map[i][i] = i;
        }

        // 인접행렬
        for(int i = 0; i < m; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            map[a][b] = 1;
            map[b][a] = 1;
        }

        bfs(1);
        System.out.println(count);

        br.close();

    }

    // 바이러스에 걸린 컴퓨터 확인하기 위한 BFS에서 큐 사용
    public static int bfs(int start){
        Queue<Integer> q = new LinkedList<Integer>();

        q.offer(start);
        explore[start] = true;

        while (!q.isEmpty()){
            int temp = q.poll();

            for(int k=1; k<=n; k++) {
                if(map[temp][k] == 1 && explore[k] == false) {
                    q.offer(k);
                    explore[k] = true;
                    count ++;
                }
            }
        }

        return count;
    }

}
