package task.pakage;

public class Sample {

	public static void main(String[] args) {
		String s="hello";
		String s3="heo";
		s=s+"world";
		String s1="helloworld";
		if(s==s1) {
			System.out.println("s");
		}
		if(s.equals(s1)) {
			System.out.println("sa");
		}
		else {
			System.out.println("d");
		}
		int a=s.length();	
		System.out.println(a);
		String s4=s.concat(s3);
		System.out.println(s4);
		char c=s.charAt(5);
		System.out.println(c);
		
		if(s.contains("o")) {
			System.out.println("its there");
		}
		String s6=s.substring(5);
		System.out.println(s6);
		if(s.equalsIgnoreCase(s1)) {		
			System.out.println("b");
		}
		}
}
//explore more method