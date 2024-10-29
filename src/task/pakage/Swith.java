package task.pakage;
import java.util.*;

public class Swith {
	public static void main(String[] args) {
		int n;
		char ch;
		Scanner se=new Scanner(System.in);
		
//	do {
		System.out.println("enter the choice:1.Even orodd 2.fibbon 3.factorial 4.amstrong ");
		n=se.nextInt();
	
		switch(n) {
		case 1:int a;
				System.out.println("enter the number to check");
			    a=se.nextInt();
			    if(a%2==0) {
			    	System.out.println("its even");
			    }
			    else {
			    	System.out.println("its odd");
			    }
			    break;
		case 2:int b;
				System.out.println("enter the limit");
				b=se.nextInt();
				int f=0,s=1;
				int sum=0;
				System.out.println(+f);
				System.out.println(+s);
				for(int i=1;i<=b;i++){
				sum=f+s;
				System.out.println(sum);
				f=s;
				s=sum;
				}
				break;
		case 3:int nu,fa=1;
				System.out.println("Enter the input");
				nu=se.nextInt();
				for(int i=1;i<=nu;i++){
				fa=fa*i;
				}
				System.out.println(fa);
				break;
		case 4:int no, d, le = 0, c = 0;
				System.out.println("enter the number");
				no = se.nextInt();
				d = no;
				while (no > 0){
					no /= 10;
					le++;
				}
				no=d;
				while (no > 0) {
					int l = no % 10;
					c += Math.pow(l, le);
					no /= 10;
				}
				if (c == d) {
					System.out.println("Its an amstrong number");
				} else {
					System.out.println("its not an amstrong number");
				}
				break;
//		} 
//		System.out.println("do u want to continue");
//		ch=se.next().charAt(0);
//		while(ch=='y'||ch=='Y');
	}
}
}
