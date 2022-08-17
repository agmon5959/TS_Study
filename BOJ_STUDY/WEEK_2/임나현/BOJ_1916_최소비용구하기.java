package study.dijkstra;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//<다익스트라 알고리즘 구현  (우선순위 큐) >

public class BOJ_1916_최소비용구하기 {
    static long[] dist;
    static boolean[] visited;
    static int n, m; // n 정류장의 총 개수 , m 버스노선의 총 개수

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());
        m = Integer.parseInt(br.readLine());

        int[][] map = new int[n + 1][n + 1];    // 간선 연결 정보

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if(i==j) {
                    map[i][j] = 0;
                    continue;
                }
                map[i][j] = Integer.MAX_VALUE-1; // 경로가 존재하지 않으면 무한대(Integer.MAX_VALUE-1) 값으로 초기화 , infinite
            }
        }

        for (int i = 0; i < m; i++) {
            String[] inputs = br.readLine().split(" ");

            int s = Integer.parseInt(inputs[0]); // 출발지점(sNode)
            int e = Integer.parseInt(inputs[1]); // 도착지점(eNode)
            int w = Integer.parseInt(inputs[2]); // 버스비(cost)

            // 같은 경로가 여러 번 들어올 경우 가장 작은 weight 값을 저장
            if(map[s][e] == -1) {  // 0처리하기
                map[s][e] = w;
            }  else if(map[s][e] > w) {
                map[s][e] = w;
            }

        }

        String[] inputs = br.readLine().split(" ");
        int start = Integer.parseInt(inputs[0]);
        int end = Integer.parseInt(inputs[1]);


        dist = new long[n + 1]; // dist[]로 선언하여 초기화
        visited = new boolean[n + 1];

        // Dijkstra

        // distance initialize
        for (int i = 1; i <= n; i++) {
            dist[i] = map[start][i];
        }
        //다른 도시를 방문했는지 여부를 체크
        visited[start] = true;

        for (int i = 0; i < n - 1; i++) {
            int cur = getMinIdx();
            visited[cur] = true;
            for (int j = 1; j <= n; j++) {
                if(!visited[j]){
                    if (dist[cur] + map[cur][j] < dist[j]) {
                        dist[j] = dist[cur] + map[cur][j];
                    }
                }
            }
        }

        System.out.println(dist[end]);
        // dist에서 B에 해당하는 index 값을 print하고 종료한다.
    }

    public static int getMinIdx() {
        long min = Integer.MAX_VALUE;
        int index = 0;

        for (int i = 1; i <= n; i++) {
            // 해당 index를 visited 처리 한 뒤, 그 index의 도시를 거쳐가는 경로가 원래 dist[]에 들어있는 값보다 작으면 값을 변경한다.
            if (dist[i] < min && !visited[i]) {
                min = dist[i];
                index = i;
            }
        }
        return index;
    }
}
