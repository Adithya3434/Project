package task.pakage;

import java.util.Arrays;

public class MultiArra {
	public static void main(String[] args) {
		int a[][]= {{1,2,3,4},{1,4,5,6},{1,2,3},{9,8,7}};
		for(int i=0;i<a.length;i++) {
			System.out.println();
			for(int j=0;j<a[i].length;j++) {
				System.out.print(a[i][j]);
			}
		}
//		int b[]= {3,5,1,7,4,8};
//		Arrays.sort(b);
//		System.out.println(Arrays.toString(b));
//		
	}
}