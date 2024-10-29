package task.pakage;
import java.util.*;
public class Palen {
public static void main(String[] args) {
	String s="";
	Scanner se=new Scanner(System.in);
	System.out.println("enter the string");
	s=se.next();
	String d="";
	for(int i=(s.length()-1);i>=0;i--) {
		char c=s.charAt(i);
		d=d+c;
	}
	if(d.equals(s))
	{
		System.out.println("its palendrom");
	}
	else {
		System.out.println("not");
	}
}
}
