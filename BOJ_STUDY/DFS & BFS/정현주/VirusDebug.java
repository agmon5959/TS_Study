package com.example.javacote;

import java.io.*;
import java.util.StringTokenizer;
import java.util.ArrayList;

public class VirusDebug {
    static int ComputerNum; //노드의 수
    static int NetworkNum; //간선의 수 (에지의 수)
    static ArrayList<Integer>[] A; //인접 리스트
    static boolean[] visit; //방문 배열
    static int count; //카운트를 세는 이유 : 연결요소 개수 구하기 위해서

    static void dfs(int v){
        if(visit[v]){ //visit 배열의 v번째 값이 true라면 탈출
            return;
        }
        visit[v] = true; //방문 배열에 현재 노드 방문 기록하기
        count++; //방문 횟수 증가

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
        //scanner보다 빠름!

        //br.read라인 매우중요하다 - 백준 451 갱장히중요하다..
        ComputerNum = Integer.parseInt(br.readLine()); //노드의 개수
        NetworkNum = Integer.parseInt(br.readLine()); //에지의 개수
        //TODO : 중요) 놓친것 - 참조배열 선언 안해줌
        A = new ArrayList[ComputerNum+1]; //참조할 배열을 만드러줘야함
        visit = new boolean[ComputerNum+1]; //방문 배열도 만들어줘야지..... 참조배열이 없으니가 계속 nullpointerException

        for(int i=1; i < ComputerNum+1; i++){
            A[i] = new ArrayList<Integer>(); //시작점이 1이기 때문에 i를 1부터 시작
        }

        for(int i=0; i < NetworkNum; i++){ //인접리스트 그리기
            StringTokenizer st = new StringTokenizer(br.readLine()); //줄을 인식 못할까봐 st를 for문 안에 한번 더 넣어주는 것
            //tokenizer쓴 이유는 공백을 다 짤라주는 거라서 사용한것!!

            int a1 = Integer.parseInt(st.nextToken());
            int a2 = Integer.parseInt(st.nextToken());
            A[a1].add(a2);
            A[a2].add(a1);
        }

        count = 0;
        dfs(1); //1번 컴퓨터를 통해 웜바이러스에 걸리게 되는 컴퓨터의 수를 구해야하기 때문에 dfs(1)
        //TODO : 놓친것 - count를 dfs에서 증가 안시켜줌;
        System.out.println(count-1); //1번컴퓨터의 수는 빼야하니까
    }

}
