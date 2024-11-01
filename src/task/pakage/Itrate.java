package task.pakage;
//import java.util.Scanner;
public class Itrate {
	    public static void main(String[] args) {
	        String input = "javagreat";
	        String result = "";  // Initialize an empty result string

	        for (int i = 0; i < input.length(); i++) {
	            char currentChar = input.charAt(i);
	            result += currentChar;  // Always add the current character to the result

	            // Check for duplicates and add them accordingly
	            while (i + 1 < input.length() && input.charAt(i + 1) == currentChar) {
	                result += currentChar;  // Append the current character again
	                i++;  // Skip the next character since it's a duplicate
	            }
	        }

	        // Print the result
	        System.out.println(result);
	    }
	}

