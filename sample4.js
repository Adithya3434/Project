// 1l
//   for(let i=1;i<=3;i++)
//   {
//       for(let j=1;j<=3;j++){
//           c=i**j;
//           console.log("expontional of ",i,"&",j,"is",c);
//       }
//   }

// //4l  
//   for(i=1;i<=5;i++){
//       for(j=1;j<=3;j++){
//           console.log("(",i,",",j,")");
//      }
//   }

// 3l
//  for (i=1;i<=5;i++){
//      for(j=1;j<=5;j++){
//          if((i-j)==2){
//              console.log(i,j);
            
//          }
//      }
//  }


// // 6l

//  for(i=1;i<=5;i++){
//      for(j=1;j<=5;j++){
//          if((i>j)||(i==j)){
//             console.log(i,j);
            

//          }
//      }
//  }

// 7l
//  let c=0;
//  for(i=1;i<=3;i++){
//      for(j=1;j<=2;j++){
//          c++;
//      }
//  }
//  console.log(c);

// // 9l 
//  s=0;
//  m=1;
//  for(i=1;i<=3;i++){
//      for(j=1;j<=3;j++){
//          s=i+j;
//          m=i*j;
//          if(s>m){
//              console.log(i,j);
            
//          }
//      }
//  }


// 10l
//  let e=1;
//  for(i=1;i<=3;i++){
//      for(j=1;j<=3;j++){
//          e=i*j;
//          if(e%2==0){
//              console.log(i,j); 
//          }
//      }
//  }

// 1L
//  for(i=1;i<=50;i++)
//  {
//      console.log(i);
    
//  }

// 2L
//  let a=8
//  for(i=1;i<=10;i++){
//      console.log(a*i);    
//  }


// 5L
// for(i=1;i<=2;i++){
//      for(j=1;j<=2;j++){
//          console.log(i+j);
//     }
//  }



// 1f
//  n=2;
//  if(n>0){
//      console.log("postive");   
//  }
//  else if(n==0){
//      console.log("zero");
//  }
//  else
//  {
//      console.log("negative");
    
//  }

// 2f
//  n=50
//  if(n>=90)
//      console.log("A");
//  else if(n>=90)
//      console.log("B");
//  else if(n>=80)
//      console.log("C");
//  else if(n>=70)
//      console.log("D");
//  else if(n>=60)
//      console.log("E");
//  else
//      console.log("F");


//  3f
//  let i=7
//  if((i>0)&&(i<=100))
//  {
//      console.log("the number is in b/w 1 to 100");
        
//      if(i%2==0)
//      {
//          console.log("even");
        
//      }
//      else
//      console.log("odd");
    
//  }

//  4f
// n=17;
//   if(n>18){
//       console.log(n,"age is eligible to vote");   
//   }
//   else
//   {
//       console.log(n,"age not eligible to vote");
//   }

//  5f
//  let a="w";
//  if((a=="a")||(a=="e")||(a=="i")||(a=="o")||(a=="u"))
//  {
//      console.log("vowel");
//  }
//  else
//       {
//          console.log(a,"is consonant");
//       }





// 1fe
// let a=[1,2,3,4,5]
//   let s=0;
//   a.forEach((i)=>{
//      s+=i;
    
// }); 
// console.log(s);

 
// 2fe
//  let a=[1,2,3,4,5,6];
//  let e=0;
//  a.forEach((i)=>{
//      if(i%2==0){
//          e+=1;
//      }
//  })
//  console.log(e);

//3fe
//  let a=[1,2,3,4];
//  let s=[];
//  a.forEach((i)=>{
//      s.push(i*i)
//  })
//  console.log(s);

// 4fe
//  let a=[3,5,7,2,8];
//  s=0;
//  a.forEach((i)=>{
//      if(i>s)
//          s=i;
//  })
//  console.log(s);

// 5fe 
//  let a=[1,2,3,4,5,6];
//  let s=[]
//  a.forEach((i)=>{
//      if(i%2==0){
//          s.push(i)  
//      }
//  })
//  console.log(s);

//6fe 
// let a=[1,2,3,4];
//  let s=a.map((i)=> i+=1)
//  console.log(s);


// //7fe
//  let a=[1,2,3,2,4,1];
//  let s=[];
//  a.forEach((i)=>{
//      if(!s.includes(i)){
//          s.push(i);
//      }
//  })
//  console.log(s);

// //8fe
//    let a=[3,5,7,8];
//    let s=a.map(i=>i>5 ? i*2 :i);
//     console.log(s);
 
// // 1a 
//  let a=["2","3","4","2","3"];
//  let s=[...new Set(a)].map(Number);
//  console.log(s);

// // // 2a
//  let b=["hello","hello","hello"];
//  let c=b.map((b,i)=>(b+i))
//  console.log(c);


// //4a
//   let s="dellboomi";
//   let a=s.split("");
//   let b=[]
//   let n=1
//   a.forEach(i=>{
//     if(!b.includes(i)){
//         b.push(i,":",n)
       
//         n=1;  
//     }
//     else{
//         b.push(i,":", ++n)
//         n=1;
//     }
//   })

//   console.log(b);

//   or

//  let s="dellboomi";
//  let a={};
//  [...s].forEach(i=>{
//      a[i]=(a[i]||0)+1;
//  })

//  console.log(a);


//3a
// let b=["1","5","8","10"];
// let a=b.map(Number);
// let s=[];
// for(let i=a[0];i<=a[a.length-1];i++){
//     if(!a.includes(i)){
//         s.push(i.toString())
//     }
// }

// console.log(s);
//6a
//   let array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
//   console.log(...new Set(array));

//3l

// for(i=2;i<=100;i++){
//     for(j=2;j<=i;j++){
//         if((i%j==0)&&(i!=j)){
            
//         }
//         else{
//             console.log(i);   
//         }
//     }
// }

//5lq
// let arr=[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432];
// let arr1=[]
// arr.map((data)=>{
//     let odd=0
//     let even=0
//     let str=data.toString().split("");
//     str.map((data,index)=>{
//         if(data%2===0){
//             even++;
//         }
//         else{
//             odd++;
//         }
//     })
//     arr1.push(odd+""+even)
// })
// console.log(arr1);



 
