// let obj=new Object()
// obj.name="arun"
// console.log(obj);

// let a=2;
// let b=3;
// function add1(...d){
//     console.log(...d);
// }
// add1(a,b,4,1,6,8,23,5,7,0)

// const job=()=>{
//     console.log("add");
    
// }
// job()

// let arr=[1,2,3,"4",[7,3,5,6,7,5]]
// let arr1=[];
// const chan=(a)=>{
//     // console.log(a);
//     a.map(v=>{
//         if(typeof v=="number"){
//             arr1.push(v)
//         }
//         else if(typeof v=="string"){
//             parseInt(v);
//             chan(v)
//         }
//         else{
//             chan(v)
//         }
//     });
// }
// chan(arr)
// console.log(arr1);

// 1q
// function isEvenOrOdd(a){
// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// }
// isEvenOrOdd(5);

// 2q
// function findMax(b){
//     b.map(i=>{
         
//         if(i>c){
//            c=i;
//         }
        
//     });
//     console.log(c);
// }
// let a=[3, 5, 1, 8, 2];
// let c=a[0];
// findMax(a)

// OR 
// let a=[3, 5, 1, 8, 2];
// findMax(a);
// function findMax(a){
//     let c=Math.max(...a);
//     console.log(c);  
// }



// 3q
// let reverseString=(a)=>{
//     let b=a.split('').reverse().join('');
//     console.log(b);
    
// }
// let b="hello";
// reverseString(b);

// 4q
// let a=[1, 2, 3, 4, 5];
// let sum=0;
// sumArray(a);
// function sumArray(a) {
//     a.map(i=>{
//         sum+=i;
//     });
//     console.log(sum);
    
// }

// 5q
// let a="javascript";
// let n=0;    
// countVowels(a);
// function countVowels(a){
//     for(let c of a){
//         if(c=="a"||c=="e"||c=="i"||c=="o"||c=="u"){
//             n++;
//         }
//     }
//     console.log(n); 
//     }

// 6q
// let a="MADAM";
// let b="hello";
// isPalindrome(a,b);
// function isPalindrome(a,b){
//     let c=a.split('').reverse().join("");
//     let d=b.split('').reverse().join("");
//     if(a==c){
//         console.log("true");   
//     }
//     else{
//         console.log("false");
        
//     }
//     if(b==d){
//             console.log("true");   
//         }
//         else{
//             console.log("false");
            
//         }
// }
// or
// let b="";
// isPalindrome("madam");
// function isPalindrome(a){
//    for(let i=a.length-1;i>=0;i--){
//        b+=a[i];
//    }
//    if(a==b){
//        console.log("True");
//    }
//    else{
//        console.log("false");
       
//    }
//        console.log(b);
// }


// 7q
// factorial(5);
// function factorial(a){
//     let s=1;
//     for(let i=1;i<=a;i++){
//         s*=i;
//     }
//     console.log(s);   
// }

// 8q
// findMin([4, 2, 8, 1, 5]);
// function findMin(a){
//     let c=Math.min(...a)
//     console.log(c);
// }

// 9q
// let a=[1,2,3,4,5];
// let b=[3, 1, 4, 2];
// console.log(isSorted(a));
// console.log(isSorted(b));
// function isSorted(arr,arr2) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<arr[i+1]){
//            return true;
//         }
//         else{
//             return false;
//         }
//     }
//     for(let i=0;i<arr2.length;i++){
//         if(arr2[i]<arr2[i+1]){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     }

// 10q
// let c=[];
// let a=[1, 2, 3];
// let b=[2, 3, 4];
// getIntersection(a,b);
// function getIntersection(a,b){
//     for(let i=0;i<a.length;i++){
//         for (let j= 0;j<b.length;j++){  
//             if(b[j]==a[i]){
//                 c.push(a[i]);
//             }
//         }
//     }
//    console.log(c);
// }

// // 11q
// countCharacters("hello");
// function countCharacters(a){
// let obj={}
// for(b of a){
//     if(obj[b]){
//         obj[b]++;
//     }
//     else{
//         obj[b]=1;
//     }
// }
// console.log(obj);
// }

// 12q
// let b=[];
// flattenArray([1, [2, 3], [4, 5], 6,{name:"Ady"}]);
// function flattenArray(a){  
// a.map(i=>{
//     if(Array.isArray(i)){
//         flattenArray(i);
//     }
//     else{
//         b.push(i);
//     }
// })
// }
// console.log([...new Set(b)]);

// 13q
// let b=[];
// removeFalsyValues([0, 1, false, 2, '', 3]);
// function removeFalsyValues(a){
//     a.map(i=>{
//         if(typeof i=="number" && i!=0){
//             b.push(i)
//         }
//     })
// console.log(b);
// }
 
// 15q 
// average([10, 20, 30, 40]);
// function average(a){
//     let av=0;
//     let m=0;
//     for(i=0;i<a.length;i++){
//          m=m+a[i];
        
//     }
//     av=m/a.length;
//     console.log(av);
    
// }

// 16q 
// let f=1;
// factorial(5);
// function factorial(a){
//     if(a>0){
//     f=f*a;
//     a--;
//     factorial(a);
//     }   
// }
// console.log(f);

// 17q 
// let f=0;
// let s=1;
// sum=0;
// fibonacci(6);
// function fibonacci(a){
// while(a>=0){
//     sum=f+s;
//     console.log(f);
//     f=s;
//     s=sum;
//     a--;
// }
// }

// 18q 
// let s=0;
// sumOfDigits(1234);
// function sumOfDigits(a){
// let c=a.toString().split('');
// for(i=0;i<c.length;i++){
//     s=s+parseInt(c[i]);
// }
// console.log(s);
// }

// 19q 
// let mul=1;
// productArray([1, 2, 3, 4]);
// function productArray(a){
//     for(i=0;i<a.length;i++){
//         mul=mul*a[i];
//     }
//     console.log(mul);
// }

// 20q 
// let s=1;
// power(2, 3);
// function power(a,b){
//     if(b!=0){
//         s=s*a;
//         b--;
//         power(a,b);
//     }
// }
// console.log(s);

// 24q 
// const start = 1;
// const end = 5;
// let a=[];
// startarray(start,end);
// function startarray(start,end){
//     for(i=start;i<=end;i++){
//         a.push(i);
//     }
//     console.log(a); 
// }

// 25q 
// console.log(isPrime(11));
//  function isPrime(a){
//     for(i=2;i<a;i++){
//         if(a%i==0){
//             return false;
//         }
//         else{
//             return true;
//         }
//     }
// }

// 23q 
// a=[1,2,3,1,4,5,2,6]
// r=[];
// result=[];
// rep(a);
// function rep(a){
//     for(i=0;i<a.length;i++){
//         if(r[a[i]]){
//             result.push(a[i]);

//         }
//         else{
//             r.push(a[i])
//         }
//     }
// }
// console.log(result);


