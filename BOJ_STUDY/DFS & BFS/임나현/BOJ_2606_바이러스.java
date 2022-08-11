package study.graph;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_2606_바이러스 {
    static int computer, cnt;
    static int[] p;
    static int find(int x) {
        if(p[x] == x) return x;
        else return p[x] = find(p[x]);
    }
    static void union(int f, int s) {
        int ff = find(f);
        int ss = find(s);

        if(ff<ss)
            p[ss]=ff;
        else
            p[ff]=ss;

    }
    public static void main(String[] args) throws Exception{
        // TODO Auto-generated method stub
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        computer = Integer.parseInt(br.readLine());
        cnt = Integer.parseInt(br.readLine());
        p = new int[computer+1];

        for(int i=1; i<=computer; i++)
            p[i] = i;

        for(int i=1; i<=cnt; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int first = Integer.parseInt(st.nextToken());
            int second = Integer.parseInt(st.nextToken());
            union(first,second);
        }
        int ans = 0;
        for(int i=2; i<=computer; i++) {
            if(find(i)==find(1))  ans +=1;
        }
        System.out.println(ans);
    }
}
