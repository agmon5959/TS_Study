package 정현주;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 집합표현하기0828 {
    static int[] unionFindArr;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken()); //원소개수
        int m = Integer.parseInt(st.nextToken()); //질의개수

        //원소개수 만큼의 유니온파인드 배열 만들기
        unionFindArr = new int[n+1];

        //배열 자기자신값으로 초기화하기
        for(int i=1; i<n+1; i++){
            unionFindArr[i] = i;
        }

        //합 집합 및 find for문으로 실행
        for(int i=1; i<m+1; i++){
            st = new StringTokenizer(br.readLine());
            int unionOrFind = Integer.parseInt(st.nextToken()); // 0: union, 1: find
            int node1 = Integer.parseInt(st.nextToken());
            int node2 = Integer.parseInt(st.nextToken());

            if(unionOrFind == 0){ //union이면
                union(node1,node2);
            }else{
                checkSame(node1,node2);
            }
        }
    }

    public static int find(int x) {
        if (x == unionFindArr[x]) {
            return x;
        }

        //x의 대표노드가 x가 아니라면 x의 대표노드를 찾아야 하므로 find함수 한번 더 실행
        return unionFindArr[x] = find(unionFindArr[x]); //재귀함수
    }

    public static void union(int x, int y) {
        x = find(x); //대표노드
        y = find(y);

        if (x != y) { //대표노드와 그냥 노드의 값이 다르다면 그냥노드의 값을 대표노드로 바꿔줘야 하므로
            unionFindArr[y] = x; //두 원소의 대표노드끼리 연결하기
        }
    }

    public static void checkSame(int x, int y){
        int parant1 = find(x); //x의 대표노드
        int parant2 = find(y); //y의 대표노드

        if(parant1 == parant2){
            System.out.println("YES");
        }else{
            System.out.println("NO");
        }
    }
}
