package study.DFS;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

// 최종 제출
public class BOJ_2644_촌수계산 {
    static int N;
    static List<Integer>[] relation;
    static boolean[] checked;
    static int res = -1;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        N = Integer.parseInt(br.readLine());

        relation = new ArrayList[N + 1];
        checked = new boolean[N + 1];

        for(int i=1; i < N+1; i++) {
            relation[i] = new ArrayList<>();
        }

        // 입출력 순서 계산
        StringTokenizer st = new StringTokenizer(br.readLine());
        int X = Integer.parseInt(st.nextToken());
        int Y = Integer.parseInt(st.nextToken());

        int E = Integer.parseInt(br.readLine());

        for(int i = 0; i < E; i++) {
            st = new StringTokenizer(br.readLine());

            int p = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            relation[p].add(c);
            relation[c].add(p);
        }

        dfs(X, Y, 0);
        System.out.println(res);
    }

    static void dfs(int start, int end, int cnt) {
        if(start == end) {
            res = cnt;
            return;
        }

        checked[start] = true;

        for(int i = 0; i < relation[start].size(); i++) {
            int next = relation[start].get(i);

            if(!checked[next]) {
                dfs(next, end, cnt+1);
            }
        }
    }
}
