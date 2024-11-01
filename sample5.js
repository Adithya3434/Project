// 3L
//  for(let n=2;n<=100;n++){
//      let p=true;
//      for(i=2;i<=Math.sqrt(n);i++){
//          if(n%i==0){
//              p=false;
//          }
//      }
//      if(p==true){
//          console.log(n);
        
//      }
//  }

// 4L
//  let s=0;
//  for(let i=1;i<=10;i++){
//      s+=i*i;
//  }
//  console.log(s);

// 8l
//  let s=0;
//  for(i=1;i<=4;i++){
//      for(j=1;j<=4;j++){
//          s=i+j;
//          let p=true;
//          for(k=2;k<=Math.sqrt(s);k++){
//              if(s%k==0){
//                  p=false;
//              }
//          }
//          if(p==true){
//              console.log(i,j);
            
//          }
//      }
//  }

//5l

//  for(i=2;i<=5;i++){
//     for(j=2;j<=5;j++){
//          let p=true;
//          let o=true;
//          for(k=2;k<=Math.sqrt(i);k++){
//              if(i%k==0){
//                  p=false;
//              }
//          }
//          for(l=2;l<=Math.sqrt(j);l++){
//             if(j%l==0){
//                 o=false;
//             }
//          }
//          if((p==true)&&(o==true)){
//              console.log(i,j);     
//          }
//      }
//  }

// // 1lq 
//   let s=["sri veni pogula"];
//   let b=s.toString().replace(/ /g,"");
//   let a={};
//   [...b].forEach(i=>{
//        a[i]=(a[i]||0)+1;
//    })
//    console.log(a);

// // 3lq 
//  let a=[2435,982,5642,1232,87];
//  let b=[];
//  for(i=0;i<a.length;i++){
//      let n=a[i];
//      let e=0;
//      let o=0;
//      while(n>0){
//          let d=n%10;
//          if(d%2==0){
//              e+=d;
//          }
//          else{
//              o+=d;
//          }
//          n=Math.floor(n/10);
//      }
//      b[i]=parseInt(e.toString()+o.toString());;
//  }
//  console.log(b);


//  or



// copywithin
//  let a=["apple","mango","banana","cherry","kiwi"];
//  b=a.copyWithin(3,0,3)
//  console.log(b);

//flat
// let a=[1,[2,[3,[4,5]],],];
// let b=a.flat(Infinity);
// console.log(b);

//flatmap
// let a=[1,2,3,4,5];
// let b=a.flatMap(i=> [i+'s']);
// console.log(b);

// let a="hi world";
// let b=a.split("");
// console.log(b);

// 
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let f= fruits.slice(0,2);
// console.log(f);



// 
 

// let a=[1,2,3,4]
// let sqs=a.map(sq)
// let cu=a.cu(cus)
// console.log(sqs);

// function sq(e){
//    return Math.pow(e,2);  
// }
// function cus(e) {
//    return Math.pow(e,3)
// }

// let a=["hi world"];
// b=[];
// a.map(i=>{
//    let sp=a.toString().split('');
//    if((sp[i]=='a')||(sp[i]=='e')||(sp[i]=='i')||(sp[i]=='o')||(sp[i]=='u')){
//       sp[i]='#';
//       b.push(sp)
//    }
// })
// console.log(b);

//5lq
// let a=[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432];
// let b=[];
// a.map()

// let a=["Adithya S Nair"];
// c=a.toString().replace(/ /g,"");
// console.log([...c]);

// b={};
// [...c].map(i=>{
//    b[i]=(b[i]||0)+1
// })
// console.log(b);
