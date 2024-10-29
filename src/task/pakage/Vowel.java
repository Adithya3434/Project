package task.pakage;
import java.util.*;
public class Vowel {
	public static void main(String[] args) {
		String s="";
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the String");
		s=sc.next();
		String d="";
		String rd="";
		String e="";
		for(int i=0;i<s.length();i++) {
			char c=s.charAt(i);
			if((c=='a')||(c=='e')||(c=='i')||(c=='o')||(c=='u')||(c=='A')||(c=='E')||(c=='I')||(c=='O')||(c=='U')){
				d+=c;
			}
			else {
				e+=c;
			}
		}
		System.out.println(e);
		System.out.println(d);
		for(int j=d.length()-1;j>=0;j--) {
			char f=d.charAt(j);
			rd+=f;
		}
		System.out.println(e+rd);
		
	}

}
