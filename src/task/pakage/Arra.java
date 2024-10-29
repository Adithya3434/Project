package task.pakage;

public class Arra {
	public static void main(String[] args) {
		int []a= {1,2,3,4,5,6,7,8};
//		System.out.println(l);
//		int a1[]= {1,2,3,4,5};s
		int []z= new int[a.length+1];
		int p=3;
//		for(int i=0;i<a.length;i++) {
//		System.out.println(a[i]);
//		}
		for(int i=0;i<p;i++) {
			z[i]=a[i];
		}
		z[p]=9;
		for(int j=p;j<a.length;j++) {
				z[j+1]=a[j];
		}
		for(int i=0;i<z.length;i++) {
			System.out.println(z[i]);
		}
//		String []s= {"Adithya","Rohit","Vijay"};
//		for(int i=0;i<s.length;i++) {
//			System.out.println(s[i]);
//		}
}
}

