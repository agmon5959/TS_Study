package 정현주;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class minMoney {
    static int N, M;
    static ArrayList<Node>[] list; // 인접리스트로 그래프 표현하기. (그래프 정보 저장)
    static int[] dist; // 최단거리 배열. -> 아마도 다익스트라 를 통해 return되는 배열?
    static boolean[] visit; // 사용노드인지 확인하는 배열. (방문배열)
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        N = Integer.parseInt(br.readLine()); //도시 개수
        M = Integer.parseInt(br.readLine()); //버스 개수
        list = new ArrayList[N + 1];
        dist = new int[N + 1];
        visit = new boolean[N + 1];
        Arrays.fill(dist, Integer.MAX_VALUE); //정수의 최댓값(무한대)으로 dist 배열(거리배열) 값 초기화 시키기
        for (int i = 0; i <= N; i++) {
            list[i] = new ArrayList<Node>(); //그래프 정보를 저장하는 인접리스트 초기화
        }
        for (int i = 0; i < M; i++) { // 주어진 그래프의 간선들을 인접리스트 자료구조에 넣는 부분
            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken()); //출발지
            int end = Integer.parseInt(st.nextToken()); //도착지
            int weight = Integer.parseInt(st.nextToken()); //비용
            list[start].add(new Node(end, weight)); //출발지는 list[start]에 {도착지,비용} 이렇게 들어가짐.
        }
        st = new StringTokenizer(br.readLine());
        int startIndex = Integer.parseInt(st.nextToken()); //출발점
        int endIndex = Integer.parseInt(st.nextToken()); //도착점 : 문제에서 구해야할 거리까지의 도착점!!!
        // 다익스트라 알고리즘 수행
        bw.write(dijkstra(startIndex, endIndex) + "\n");
        bw.flush();
        bw.close();
        br.close();
    }
    //TODO: 각 자료구조별 특징, 알고리즘 유형에 따른 자료구조 유형 정리하기. => 문제별 키워드 도 함께 총 정리
    public static int dijkstra(int start, int end) {   // 다익스트라 알고리즘 : 최단거리(최소비용) 구하기
        PriorityQueue<Node> pq = new PriorityQueue<>();
        //우선순위 큐 - 선택이유 : 자동으로 거리가 최소인 노드를 선택할 수 있게 해주는 자료구조라서
        pq.offer(new Node(start, 0)); //시작점을 오름차순 우선순위 큐에 넣고 시작
        dist[start] = 0;
        while (!pq.isEmpty()) {
            Node nowNode = pq.poll();
            int now = nowNode.targetNode;
            if (!visit[now]) { //현재 선택된 노드가 방문한 적 있는지 확인
                visit[now] = true; //방문노드로 업데이트
                for (Node n : list[now]) { // 선택노드 + 비용 < 타켓노드인 경우 값을 갱신하는 부분
                    if (!visit[n.targetNode] && dist[n.targetNode] > dist[now] + n.value) {
                        dist[n.targetNode] = dist[now] + n.value;
                        pq.add(new Node(n.targetNode, dist[n.targetNode]));
                    }
                }
            }
        }
        return dist[end];
    }
}
class Node implements Comparable<Node> {
    int targetNode;
    int value;

    Node(int targetNode, int value) {
        this.targetNode = targetNode;
        this.value = value;
    }
    @Override
    public int compareTo(Node o) { //클래스의 정렬이 필요할 때 가장 보편적으로 사용하는 방식
        return value - o.value;
    }
}

