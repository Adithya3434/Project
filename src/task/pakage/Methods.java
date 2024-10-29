package task.pakage;

public class Methods {
	public static void main(String[] args) {
		String s=" HelL lo";
		String s2="ng";
		String []a=s.split("");
		System.out.println(s.substring(1,3));
		System.out.println(s.indexOf('o'));
		System.out.println(s.lastIndexOf("l"));
		System.out.println(s.toLowerCase());
		System.out.println(s.toUpperCase());
		System.out.println(s.trim());
		System.out.println(s.replace('l','n'));
		System.out.println(s.replace("He", "no"));
		for(int i=0;i<a.length;i++) {
		System.out.println(a[i]);
		}
		System.out.println(s.concat(s2));
		System.out.println(s.equals("hell"));
		
	}

}
