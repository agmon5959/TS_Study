import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;
public class miro {
    // 상 우 하 좌 탐색을 위한 배열 선언
    static int[] dx = { 0, 1, 0, -1 }; //양 옆으로 움직이는거 표현 ( -> , <- )
    static int[] dy = { 1, 0, -1, 0 }; //상 하로 움직이는 거 표현
    static boolean[][] visited;
    static int[][] A;
    static int N, M;
    public static void main(String args[]) throws IOException {
        BufferedReader br =
                new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        A = new int[N][M];
        visited = new boolean[N][M];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine()); //행 수만큼 줄 수를 입력받으므로
            String line = st.nextToken();
            for (int j = 0; j < M; j++) {
                A[i][j] = Integer.parseInt(line.substring(j, j + 1));
                //10111 형태로 들어오는 것을 한자리식 저장되게 함
            }
        }
        BFS(0, 0); //탐색 출발지점
        System.out.println(A[N - 1][M - 1]);
    }

    public static void BFS(int i, int j) {
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[] { i, j }); //첫 시작점 큐에 넣기
        while (!queue.isEmpty()) { //bfs 탐색할 수 없을 때까지 while문 돌리겠다는 뜻
            int now[] = queue.poll(); //튜에서 뺀 값 배열에 저장 (지금 값이라는 뜻)
            visited[i][j] = true; //방문배열에 저장
            for (int k = 0; k < 4; k++) { //상하좌우로 탐색
                int x = now[0] + dx[k]; // 0
                int y = now[1] + dy[k]; // 1
                if (x >= 0 && y >= 0 && x < N && y < M) {
                    // 좌표 유효성 검사 (배열을 넘어가면 안되기때문에 검사)
                    if (A[x][y] != 0 && !visited[x][y]) {
                        // 갈수 있는 칸인지 + 미방문 정점 검사
                        visited[x][y] = true; //이제 갈 수있는 곳이면 방문배열에 넣기
                        A[x][y] = A[now[0]][now[1]] + 1;
                        // depth update (핵심) : 1로 표시해주는 것
                        queue.add(new int[] { x, y });
                        // 현재 방문한 곳을 다시 queue에 넣고 탐색
                    }
                }
            }
        }
    }
}
