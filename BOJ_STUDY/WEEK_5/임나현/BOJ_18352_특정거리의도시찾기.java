package study.dijkstra;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

//  <다익스트라 알고리즘 구현  (우선순위 큐) >
// 최종제출
public class BOJ_18352_특정거리의도시찾기 {
    private static final int INF = Integer.MAX_VALUE;
    static List<List<EdgeCity>> listEdge = new ArrayList<>();
    static int[] distance;
    static int N, M, K, X, V;

    // 가중치가 있는 그래프를 담기 위한 클래스 구현
    static class EdgeCity implements Comparable<EdgeCity> {
        int vertex;
        int value;

        public EdgeCity(int vertex, int value) {
            this.vertex = vertex;
            this.value = value;
        }

        @Override
        public int compareTo(EdgeCity e) {
            return value - e.value;
        }

    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        X = Integer.parseInt(st.nextToken());

        distance = new int[N + 1];

        Arrays.fill(distance, INF); // 초기화

        listEdge = new ArrayList<>();

        for(int i = 0; i <= N; i++) {
            listEdge.add(new ArrayList<>());
        }

        // 가중치가 있는 인접 리스트 초기화
        for (int i = 0; i < M; i++){
            st = new StringTokenizer(br.readLine());
            int X = Integer.parseInt(st.nextToken());
            int Y = Integer.parseInt(st.nextToken());

            listEdge.get(X).add(new EdgeCity(Y, 1));
        }

        dijkstra(X);

        for(int i=1; i<distance.length; i++) {
            if(distance[i] == K) {
                sb.append(i).append('\n');
            }
        }

        // 출력
        if(sb.length() == 0) {
            System.out.println(-1);
        } else {
            System.out.println(sb);
        }

    }

    private static void dijkstra(int vertex) {
        PriorityQueue<EdgeCity> que = new PriorityQueue<>();
        boolean visit[] = new boolean[N + 1];
        distance[vertex] = 0;

        que.offer(new EdgeCity(vertex, 0)); // 시작점

        while( !que.isEmpty() ) {
            EdgeCity city = que.poll();
            int c_v = city.vertex;

            if(visit[c_v]) continue;    // 이미 방문한 노드는 다시 큐에 넣지 않음

            visit[c_v] = true;

            for(EdgeCity c : listEdge.get(c_v)) {

                if( !visit[c.vertex] && distance[c.vertex] > (c.value + distance[c_v]) ) {  // 최소
                    distance[c.vertex] = c.value + distance[c_v];
                    que.offer(new EdgeCity(c.vertex, distance[c.vertex]));
                }
            }
        }

    }

}

