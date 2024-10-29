package task.pakage;
import java.util.*;
public class Deletearray {
	public static void main(String[] args) {
		int []a= {1,2,3,4,5,6,7,8};
		int []z= new int[a.length];
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the postion");
		int p=sc.nextInt();
		for(int i=0;i<p;i++) {
			z[i]=a[i];
		}
		System.out.println("enter the number to insert");
		int n=sc.nextInt();
		z[p]=n;
		for(int i=p+1;i<a.length;i++) {
			z[i]=a[i];
		}
		for(int i=0;i<z.length;i++) {
			System.out.println(z[i]);
		}
	}

}
