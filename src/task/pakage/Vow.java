package task.pakage;
import java.util.*;
public class Vow {
	public static void main(String[] args) {
	System.out.println("enter the string");
	Scanner sac=new Scanner(System.in);
	String so=sac.next();
	StringBuffer s=new StringBuffer(so);
	StringBuffer sv=new StringBuffer("");
	StringBuffer sc=new StringBuffer("");
	for(int i=0;i<s.length();i++){
		char c=s.charAt(i);
		if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='A'||c=='E'||c=='I'||c=='O'||c=='U') {
			sv.append(c);
		}
		else {
			sc.append(c);
		}
	}
	sv.reverse();
	sv.append(sc);
	System.out.println(sv);
	}
}
