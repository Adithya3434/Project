//1p
//  let n=4;
//  let s=""
//  for(let i=1;i<=n;i++){
//      for(let j=1;j<=n;j++){
//           s+="*";
//          }
//          s+="\n";
//  }
//  console.log(s);

// // //2p
//  let n=5;
//  let s=" ";
//  for(let i=0;i<n;i++){
//      for(j=0;j<i;j++){
//         s+="*"
//      }
//      s+="\n"; 
//  }
//  console.log(s);

// //3p
//  let n=4;
//  let s="";
//  for(let i=n;i>0;i--)
//  {
//      for(let j=0;j<i;j++){
//          s+="*";
//      }
//      s+="\n";
//  }
//  console.log(s);

// //  let n=4;
 let s=" ";
 let b="*";
 for(let i=0;i<=4;i++)
 {
     for(let j=0;j<i;j++){
        s+="*".repeat((2*i)-1);
     }
     s+="\n";
 }
 console.log(s);


//5
//  let n=4
//  let s=" ";
//  for(let i=0;i<=n;i++)
//  {
//      for(j=1;j<=i;j++){
//         s+=j;
//     }  
//      s+="\n"
//  }
//  console.log(s);

// //6
//  let n=4;
//   let s="";
//  for(let i=0;i<=n;i++){
//      for(let j=0;j<i;j++){
//          if(i%2==0){
//              s+="0";
//          }
//          else
//          s+="1";
//      }
//      s+="\n";
//  }
//  console.log(s);

//7p
//  let n=4;
//  let b=1;
//  let s="";
//  for(let i=0;i<=n;i++){
//      for(let j=1;j<=i;j++){
//          s+=b++;
//     }
//      s+="\n";
//  }
//  console.log(s);

