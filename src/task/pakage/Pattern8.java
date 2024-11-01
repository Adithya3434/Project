package task.pakage;

public class Pattern8 {
	    public static void main(String[] args) {
	                
	                for (int i = 1; i <= 4; i++) {
	                    
	                    for (int j = 1; j <= 4 - i; j++) {
	                        System.out.print(" ");
	                    }
	                    
	                    for (int j = 1; j <= i; j++) {
	                        System.out.print(i);
	                        if (j < i) {
	                            System.out.print(" "); 
	                        }
	                    }
	                    System.out.println(); 
	                }

	                
//	                for (int i = 4- 1; i >= 1; i--) {
//	                    
//	                    for (int j = 1; j <= 4 - i; j++) {
//	                        System.out.print(" ");
//	                    }
//	                    
//	                    for (int j = 1; j <= i; j++) {
//	                        System.out.print(i);
//	                        if (j < i) {
//	                            System.out.print(" "); 
//	                        }
//	                    }
//	                    System.out.println(); 
//	                }
	            }
}
