//1lq
// let s=["sri veni pogula"];
//   let b=s.toString().replace(/ /g,"");
//   console.log(b);
  
//   let a={};
//   [...b].forEach(i=>{
//        a[i]=(a[i]||0)+1;
//    })
//    console.log(a);

//3lq
// let a=[2435,982,5642,1232,87];
// let arr=[];
// let sum=0;
// a.map((data)=>{
//     let even=0;
//     let odd=0;

//     let sp=data.toString().split("");
//    // console.log(sp);
    
//    sp.map(digit => {
    
    
//     let num=parseInt(digit);
//    // console.log(num);
    
//     (num%2==0)?even=even+num:odd=odd+num;
    
    
// });
// sum=parseInt(even.toString()+odd.toString());

// arr.push(sum);
// });
// console.log(arr);



// 4lq
// let a=[287, 7342, 934757,66542,75,765765];
// let b=[];
// a.map((data)=>{ 
//     let sp=data.toString().split("");
//     let c="";
//     if(sp.length%2==0){
//       while(sp.length>0){
//          let f=parseInt(sp.shift());
//          let l=parseInt(sp.pop());
//          let sum=f+l;
//          c+=sum.toString();
//       }
//    }
//    else {
//       while(sp.length>1){
//          let f=parseInt(sp.shift());
//          let l=parseInt(sp.pop());
//          let sum=f+l;
//          c+=sum.toString();   
//         }
//         c+=sp[0];
//    }
//    b.push(parseInt(c));
// });
// console.log(b);

//5lq
// let arr=[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432];
// let arr1=[];
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

//6lq
// let  a=[0,1,2,3,4,5,6,7,8,9];
// let b=[];
// let e=[];
// let c=3;
// for(let i=0;i<a.length;i += c){
//    b.push(a.slice(i,i+c))
// }
// console.log(b);
// let d=5;
// for(j=0;j<a.length;j+=d){
//    e.push(a.slice(j, j+d))
// }
// console.log(e);

//8lq
// let a=[12, -7, 5, 8, -10, 20];
// let s=0;
// a.forEach(i =>{
//    if(i>0){
//       s+=parseInt(i)*2;
//    }
// });
// console.log(s);



// 9lq
// let s1=s2=s3=s4=s5=s6=s7=s8=s9=s0=0;
// for(let i=1;i<=50;i++){
//      let c= i.toString().split("");
//      c.map((e)=>{
//       if(e==='1')s1++;
//       if(e==='2')s2++;
//       if(e==='3')s3++; 
//       if(e==='4')s4++;
//       if(e==='5')s5++;
//       if(e==='6')s6++;
//       if(e==='7')s7++;
//       if(e==='8')s8++;
//       if(e==='9')s9++;
//       if(e==='0')s0++;  
//      })
           
//    }
//    console.log(s1);
//    console.log(s2);
//    console.log(s3);
//    console.log(s4);
//    console.log(s5);
//    console.log(s6);
//    console.log(s7);
//    console.log(s8);
//    console.log(s9);
//    console.log(s0);

//10lq
//  let a=[8,59,738,9645,87657,123456789];
//  let b=[];
//  a.map((i)=>{
//    let s=i.toString().split("");
//    let ch="";
//    if(s.length ==1)
//       {   
//          b.push(parseInt(s)*10);
//       }
//    if(s.length===2){
//       let l=s[s.length-1];
//       let f=s[0];
//       let ch=l+f;
//       b.push(parseInt(ch));
//    }
//    if(s.length>2){
//       let l=s[s.length-1];
//       let sw=s.slice(0,-1).reverse().join('');
      
//       let ch=parseInt(sw+l);
//       b.push(parseInt(ch));
//    }
//  });
//  console.log(b);

// // 11lq 
// let a=[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876];
// let b=[];

// a.map((i,x)=>{
//    let sp=i.toString().split("");   
//    let ch=""; 
//       let str=i.toString();
//         let len=str.length;
//         if(len===1){
        
//                if((a[x]%2==0)&& (a[x+1]%2==0)||(a[x]%2==1)&&(a[x+1]%2==1)){
//                   b.push(a[x]);
//                 }
//                 else{
//                       b.push(a[x]+a[x+1]);
//                 }  
//         }
//    if(sp.length==2){
//       if((parseInt(sp[0])%2==0)&&(parseInt(sp[sp.length-1])%2!=0)){
//       let f=parseInt(sp[0]);
//       let l=parseInt(sp[sp.length-1])
//       let sum=f+l;
//       ch=parseInt(sum.toString());
//       b.push(ch);
//       }
//       else if((parseInt(sp[0])%2==1)&&(parseInt(sp[sp.length-1])%2==0)){
//             let f=parseInt(sp[0]);
//             let l=parseInt(sp[sp.length-1])
//             let sum=f+l;
//             ch=parseInt(sum.toString());
//             b.push(ch);
//       }
//       else{
//          b.push(parseInt(sp.join('')));
//       }
//    }
//    else {
//       if ((parseInt(sp[0])%2==0)&&(parseInt(sp[sp.length-1])%2==1) ) {
//           let f =parseInt(sp.shift()); 
//           let l =parseInt(sp.pop());   
//           let sum = f+l;
//           ch=parseInt(sum.toString()+sp.join('')); 
//           b.push(ch);
//       }
//       else if((parseInt(sp[0])%2==1)&&(parseInt(sp[sp.length-1])%2==0)){
//          let f =parseInt(sp.shift()); 
//          let l =parseInt(sp.pop());   
//          let sum = f+l;
//          ch=parseInt(sum.toString()+sp.join(''));
//          b.push(ch);
//       }
//       else{
//          b.push(parseInt(sp.join('')));
//       }
//   }
// });
// console.log(b);

//or
// let a=[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876];

// let b=[];
// a.map((i,x)=>{
  
//        // console.log(len);
//         if(i.toString().split("").length===1){
//                if((a[x]%2==0)&& (a[x+1]%2==0)||(a[x]%2==1)&&(a[x+1]%2==1)){
//                   b.push(a[x]);
//                 }
//                 else{
//                       b.push(a[x]+a[x+1]);
//                 }
//         }
//    if(i.toString().split("").length==2){
//       if((parseInt(i.toString().split("")[0])%2==0)&&(parseInt(i.toString().split("")[i.toString().split("").length-1])%2!=0)||(parseInt(i.toString().split("")[0])%2==1)&&(parseInt(i.toString().split("")[i.toString().split("").length-1])%2==0)){
//       b.push(parseInt(parseInt(i.toString().split("")[0])+parseInt(i.toString().split("")[i.toString().split("").length-1]).toString()));
//       }
//       else{
//          b.push(parseInt(i.toString().split("").join('')));
//       }
//    }else{
//       if ((parseInt(i.toString().split("")[0])%2==0)&&(parseInt(i.toString().split("")[i.toString().split("").length-1])%2==1)||(parseInt(i.toString().split("")[0])%2==1)&&(parseInt(i.toString().split("")[i.toString().split("").length-1])%2==0) ) {
//           b.push(parseInt(parseInt(i.toString().split("").shift())+parseInt(i.toString().split("").pop())+i.toString().split("").join('')));
//       }
      
//       else{
//          b.push(parseInt(i.toString().split("").join('')));
//       }
//   }
// });
// console.log(b);


// let a=[2435,982,5642,1232,87];
// let b=[];
// a.map(i=>{
//     let sp=a.toString().split("");
//     sp.forEach(d=>{
//         (parseInt(d)%2==0?e=+ parseInt(d):o=+ parseInt(d));
//         b.push(e.toString()+o.toString());
//     })
// })
// console.log(b);



// let a=[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876];
// let b=[];
// a.forEach((i,x)=>{
//    let sp=i.toString().split("");   
//    let ch=""; 
//       let str=i.toString();
//         let len=str.length;
//         if(len===1){
        
//                if((a[x]%2==0)&& (a[x+1]%2==0)||(a[x]%2==1)&&(a[x+1]%2==1)){
//                   b.push(a[x]);
//                 }
//                 else{
//                       b.push(a[x]+a[x+1]);
//                 }  
//         } 
//    else if (sp.length==2){
//       if((parseInt(sp[0])%2==0)&&(parseInt(sp[sp.length-1])%2!=0)){
//       let f=parseInt(sp[0]);
//       let l=parseInt(sp[sp.length-1])
//       let sum=f+l;
//       ch=parseInt(sum.toString());
//       b.push(ch);
//       }
//       else if((parseInt(sp[0])%2==1)&&(parseInt(sp[sp.length-1])%2==0)){
//             let f=parseInt(sp[0]);
//             let l=parseInt(sp[sp.length-1])
//             let sum=f+l;
//             ch=parseInt(sum.toString());
//             b.push(ch);
//       }
//       else{
//          b.push(parseInt(sp.join('')));
//       }
//    }
//    else {
//     let w="";
//     if(sp.length%2==0){
//          while (sp.length>0) {
//             let f =parseInt(sp.shift()); 
//             let l =parseInt(sp.pop());  
//         if((f%2==0)&&(l%2==1)||(f%2==1)&&(l%2==0)){
//           let sum=f+l;
//           ch+=sum.toString();
//       }
//       else{
//         w=f.toString()+l.toString()+sp.join('');
        
//       }
//     }
// }
// else{
//     while (sp.length>1){
//           if(sp.length==3){
//         let f =parseInt(sp.shift());
//         let l =parseInt(sp.pop());  
//         // console.log(sp);
        
//     if((f%2==0)&&(l%2==1)||(f%2==1)&&(l%2==0)){
//       let sum=f+l;
//       ch+=sum.toString()+sp[0];
//   }
//   else{
    // console.log(f.toString()+sp.join('')+l.toString());
//     w=f.toString()+sp.join('')+l.toString();
//   }
//  }
// else{
//     let f =parseInt(sp.shift());
//     let l =parseInt(sp.pop());  
//     if((f%2==0)&&(l%2==1)||(f%2==1)&&(l%2==0)){
//       let sum=f+l;
//       ch+=sum.toString();
      //console.log(ch);
      
//   }
//   else{
//     w=f.toString()+sp.join('')+l.toString();
//   }
// }
// }
// }
//    b.push(parseInt(ch+w));
//   }
// });
// console.log(b);











 

