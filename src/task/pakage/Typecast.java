package task.pakage;

public class Typecast {
	public static void main(String[] args) {
		byte b=100;
		int i=b;
		int n=12234;
		byte b1=(byte) n;
//		String s="123";
//		int a=Integer.parseInt(s);
//		System.out.println(a);
		System.out.println(i);
		System.out.println(b1);
		float f=12.34f;
		int h=(int) f;
		System.out.println(h);
		Integer g=1234;
		String d=String.valueOf(g);
		System.out.println(d);
		
	}
}
