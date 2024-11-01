package task.pakage;

import java.util.*;

public class Array1 {
	public static void main(String[] args) {
		int[] a = { 1, 2, 3, 4, 5, 6, 7, 8 };
		int[] z = new int[a.length + 1];
		Scanner sc = new Scanner(System.in);
		System.out.println("enter the postion");
		int p = sc.nextInt();
		for (int i = 0; i < p; i++) {
			z[i] = a[i];
		}
		System.out.println("enter the number to add");
		int n = sc.nextInt();
		z[p] = n;

		for (int i = p; i < a.length; i++) {
			z[i + 1] = a[i];
		}

//		for (int i = 0; i < z.length; i++) {
//			System.out.print(z[i] + " ");
//		}
		System.out.println(Arrays.toString(z));

	}
}
