package task.pakage;

public class ReverseStr {
	public static void main(String[] args) {
		String s="hello";
		for(int i= (s.length())-1;i>=0;i--) {
			char c=s.charAt(i);
			System.out.println(c);
			
		}
	}
}
