package task.pakage;

import java.util.*;

public class Fibo {
	public static void main(String[] args) {
Scanner se=new Scanner(System.in);
int n;
System.out.println("enter the limit");
n=se.nextInt();
int f=0,s=1;
int sum=0;
//System.out.println(f+"\n"+s);
//System.out.println(+s);
for(int i=1;i<=n;i++) {
	sum=f+s;
	System.out.print(f+" ");
	f=s;
	s=sum;
}	

}
}
