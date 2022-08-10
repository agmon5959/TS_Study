import java.io.*;
import java.util.StringTokenizer;

public class Main {
    static int ComputerNum; //노드의 수
    static int NetworkNum; //간선의 수 (에지의 수)
    static boolean[][] graph; //인접 배열
    static boolean[] visit; //방문 배열
    static int count; //카운트를 세는 이유 : 연결요소 개수 구하기 위해서

    static void dfs(int v){
        count++; //개수 구할때 필요
        visit[v] = true; //방문 배열에 현재 노드 방문 기록하기
        for(int i=1;i<=ComputerNum;i++){
            //연결노드 중 방문하지 않았던 노드만 탐색하기
            if((!visit[i])&&(graph[v][i])){
                dfs(i);
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br =
                new BufferedReader(new InputStreamReader(System.in));
        //scanner보다 빠름!
        ComputerNum = Integer.parseInt(br.readLine());
        NetworkNum = Integer.parseInt(br.readLine());
        graph = new boolean[ComputerNum+1][ ComputerNum+1];
        visit = new boolean[ComputerNum+1];
        for(int i=0; i<NetworkNum;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            //tokenizer쓴 이유는 공백을 다 짤라주는 거라서 사용한것!!
            int a1 = Integer.parseInt(st.nextToken());
            int a2 = Integer.parseInt(st.nextToken());
            graph[a1][a2] = true;
            graph[a2][a1] = true;
        }
        count =0;
        dfs(1); //dfs 1인 이유는 1번 컴퓨터가 웜바이러스에 걸렸을 때 1번컴퓨터를 통해
        //웜 바이러스에 걸리게 되는 컴퓨터의 수를 구해야하기 때문
        System.out.println(count-1); // -1하는 이유는 1번 컴퓨터는 빼야돼서
    }

}