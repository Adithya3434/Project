package task.pakage;

import java.util.*;

public class Ams {
	public static void main(String[] args) {
		int n, d, le = 0, c = 0;
		Scanner s= new Scanner(System.in);
		System.out.println("enter the number");
		n = s.nextInt();
		d = n;
		while (n > 0){
			n /= 10;
			le++;
		}
		n=d;
		while (n > 0) {
			int l = n % 10;
			c += Math.pow(l, le);
			n /= 10;
		}
		if (c == d) {
			System.out.println("Its an amstrong number");
		} else {
			System.out.println("its not an amstrong number");
		}

	}

}
