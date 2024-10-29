package task.pakage;

import java.util.Scanner;

public class Fact {
	public static void main(String[] args) {
		int n,f=1;
		Scanner s=new Scanner(System.in);
		System.out.println("Enter the input");
		n=s.nextInt();
		for(int i=1;i<=n;i++){
			f=f*i;
		}
		System.out.println(f);
	}

}
