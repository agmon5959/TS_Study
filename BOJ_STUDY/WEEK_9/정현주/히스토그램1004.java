package 정현주;

import com.sun.org.apache.xpath.internal.operations.String;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 히스토그램1004 {
    static int[] h; //높이
    static int max; //최대 넓이

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (br.readLine() != "") {

            StringTokenizer st = new StringTokenizer(br.readLine());

            int n = Integer.parseInt(st.nextToken());
            h = new int[n + 1];
            for (int i = 0; i < n; i++) {
                h[i] = Integer.parseInt(st.nextToken());
            }

            for (int i = 0; i < h.length; i++) {
                if (h[i + 1] > h[i]) {
                    int nerbi = h[i + 1] * h[i];
                    if (max > nerbi) {
                        continue;
                    }
                    max = nerbi;
                }
            }
            System.out.println(max);
        }

    }
}
