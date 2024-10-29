package task.pakage;

public class Sample1 {
	public static void main(String[] args) {
		StringBuilder sb= new StringBuilder("Helllo");
		sb.append("world");
		System.out.println(sb);
		
		StringBuffer s=new StringBuffer("hi");
		s.append(" everyone");
		System.out.println(s);
		System.out.println(s.insert(11," how r u?"));
//		System.out.println(s.reverse());
//		System.out.println(s.delete(0, 13));
		System.out.println(s.deleteCharAt(0)); 
		System.out.println(s.replace(0, 5,"new"));
		System.out.println(s.substring(0, 5));
		System.out.println(s.indexOf("how"));
		System.out.println(sb.indexOf("u"));
		System.out.println(sb.lastIndexOf("how"));
	}
}