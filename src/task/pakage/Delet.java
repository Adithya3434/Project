package task.pakage;

import java.util.Scanner;

public class Delet {
	public static void main(String[] args) {
		int []a= {1,2,3,4,5,6,7,8};
		int []z= new int[a.length-1];
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the postion");
		int p=sc.nextInt();
		for(int i=0;i<p;i++) {
			z[i]=a[i];
		}
		for(int i=p;i<z.length;i++) {
			z[i]=a[i+1];
		}
		for(int i=0;i<z.length;i++) {
			System.out.println(z[i]);
		}
	}
}
