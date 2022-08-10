import java.io.*;
import java.util.StringTokenizer;
import java.util.ArrayList;

public class Main {
    static int ComputerNum; //노드의 수
    static int NetworkNum; //간선의 수 (에지의 수)
    static ArrayList<Integer>[] A; //인접 리스트
    static boolean[] visit; //방문 배열
    static int count; //카운트를 세는 이유 : 연결요소 개수 구하기 위해서

    static void dfs(int v){
        if(visit[v]){
            return;
        }
        visit[v] = true; //방문 배열에 현재 노드 방문 기록하기

        for(int i : A[v]){
            //연결노드 중 방문하지 않았던 노드만 탐색하기
            if(visit[i] == false){
                dfs(i);
            }
        }
    }

    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br =
                new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        //scanner보다 빠름!

        ComputerNum = Integer.parseInt(st.nextToken()); //노드의 개수
        NetworkNum = Integer.parseInt(st.nextToken()); //에지의 개수

        for(int i=1; i < ComputerNum+1; i++){
            A[i] = new ArrayList<Integer>(); //시작점이 1이기 때문에 i를 1부터 시작
        }

        for(int i=0; i < NetworkNum; i++){
            st = new StringTokenizer(br.readLine());
            //tokenizer쓴 이유는 공백을 다 짤라주는 거라서 사용한것!!

            int a1 = Integer.parseInt(st.nextToken());
            int a2 = Integer.parseInt(st.nextToken());
            A[a1].add(a2);
            A[a2].add(a1);
        }

        count = 0;
        dfs(1); //1번 컴퓨터를 통해 웜바이러스에 걸리게 되는 컴퓨터의 수를 구해야하기 때문에 dfs(1)
        System.out.println(count-1); //1번컴퓨터의 수는 빼야하니까
    }

}