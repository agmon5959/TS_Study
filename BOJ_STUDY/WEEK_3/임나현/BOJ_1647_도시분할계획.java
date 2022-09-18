package study.MST.Kruscal;

import com.sun.javafx.geom.Edge;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

// 최소 신장 트리 minimum spanning tree
// 사이클이 포함되면 가중치의 합이 최소가될 수 없으므로 사이클을 포함하지 않는다.
// N개의 노드가 있으면 최소 신장 트리를 구성하는 에지의 개수는 항상 N-1개이다.
// MST(최소 스패닝 트리)를 구한 후 가장 큰 가중치의 간선을 제외, 가장 적은 비용으로 마을 구하기
// Kruskal
public class BOJ_1647_도시분할계획 {

    static class NodeEdge implements Comparable<NodeEdge>{
        int sr, eg, ve;
        NodeEdge(int sr, int eg, int ve){
            this.sr = sr;
            this.eg = eg;
            this.ve = ve;
        }

        @Override
        public int compareTo(NodeEdge o) {
            // 가중치를 기준으로 정렬을 하기 위해 compareTo 재정의
            return this.ve - o.ve;
        }
    }

    static int N;  // 노드 수
    static int M;  // 에지 수
    static int min;    // 적은 비용
    static int[] parent;    // 대표 노드 저장 배열
    static ArrayList<Edge> edge;
    static PriorityQueue<NodeEdge> queue;   // 자동 정렬을 위해 우선순위 큐

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        queue  = new PriorityQueue<>();
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());

            //sr번 집과 eg번 집을 연결하는 길의 유지비가 ve
            int sr = Integer.parseInt(st.nextToken());
            int eg = Integer.parseInt(st.nextToken());
            int ve = Integer.parseInt(st.nextToken());

            // 우선순위 큐는 자동으로 간선 비용순(오름차순)으로 정렬된다.
            queue.add(new NodeEdge(sr - 1, eg - 1, ve));
        }

        // N개의 집에서 최소비용으로 N-1개의 간선을 이용해 모든 집을 연결할 수 있다.
        parent = new int[N];
        Arrays.fill(parent, -1);

        // int mstKruskal = mstKruskal();
        mstKruskal();

        System.out.println(min);

    }

    private static void mstKruskal() {
        int num = 0;
        // 사이클이 발생하지 않는 경우에만 집합에 포함
        // 같은부모가 아니라면 연결해도 사이클이 생기지 않음
        while (!queue.isEmpty()){
            NodeEdge temp = queue.poll();

            if (union(temp.sr, temp.eg)){   // 연결
                min += temp.ve;             // 정점 갱신
                num++;                      // 가장 마지막으로 연결된 집 사이의 유지비가 가장 큼
            }
            if (num == N- 2){
                break;
            }
        }
    }

    // union 노드 집합을 합치는 합집합
    // 대표 노드끼리 연결하기
    // 대표 노드끼리 연결하기
    private static boolean union(int sr, int eg) {
        int aRoad = findRoad(sr);
        int bRoad = findRoad(eg);

        // 두 집이 연결되어 있지 않다면
        if (aRoad != bRoad){
            parent[bRoad] = aRoad;
            return true;
        }
        return false;
    }

    // find
    // 노드가 속한 집합의 루트 노드 찾는
    private static int findRoad(int sr){
        if (parent[sr] < 0){
            return sr;
        }

        return parent[sr] = findRoad(parent[sr]); // 재귀 함수의 형태로 구현 -> 경로압축부분
    }
}
