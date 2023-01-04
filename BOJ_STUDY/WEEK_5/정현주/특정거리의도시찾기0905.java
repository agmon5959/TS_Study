package 정현주;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;
import java.util.*;

public class 특정거리의도시찾기0905 {
    static int visited[];
    static ArrayList<Integer>[] A;
    static int n,m,k,x;
    static List<Integer> answer; //답 적을 answer list
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken()); //도시 개수
        m = Integer.parseInt(st.nextToken()); //도로 개수
        k = Integer.parseInt(st.nextToken()); //최단 경로 구해야하는거
        x = Integer.parseInt(st.nextToken()); //출발지 노드
        //인접리스트
        A = new ArrayList[n+1];
        //TODO : 생성자 매우 중요하다 - static에서 선언하더라도 new 사용해서 한번더 선언 하기 매우중요
        answer = new ArrayList<Integer>();
        //방문배열
        visited = new int [n+1];

        //인접리스트, 방문배열 초기화
        for(int i=1; i<n+1; i++){
            A[i] = new ArrayList<Integer>();
            visited[i] = -1;
        }

        for(int i=0; i<m; i++){
            st = new StringTokenizer(br.readLine());
            int node1 = Integer.parseInt(st.nextToken()); //출발노드
            int node2 = Integer.parseInt(st.nextToken()); //도착노드

            A[node1].add(node2); //인접리스트에 저장
        }
        BFS(x); //출발노드로 bfs함수호출 - 이유 : 출발지점에서의 최단거리가 k인것만 찾으면 되기 때문에

        for(int i=1; i<n+1; i++){
            if(visited[i] == k){ //어떤 노드가 k번 만큼 방문했었다면 최단거리가 k를 만족하므로
                answer.add(i); //답 적을 answer리스트에 add
            }
        }

        if(answer == null || answer.isEmpty()){
            System.out.println("-1");
        }else{
            Collections.sort(answer); //sort를 collections에 있는걸 사용하기 위해 answer을 list로 선언했던 것이었음
            for(int temp: answer){
                System.out.println(temp);
            }
        }

    }
    private static void BFS(int node) {  // BFS구현
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(node);
        visited[node]++;

        while (!queue.isEmpty()) {
            int now_node = queue.poll();
            //System.out.print(now_node + " "); //탐색 순서 print : 탐색순서 필요없으면 주석
            for (int i : A[now_node]) {
                if (visited[i] == -1) {
                    visited[i] = visited[now_node]+1;
                    queue.add(i);
                }
            }
        }
    }
}