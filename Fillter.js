// 1q 
// let a=[1, 2, 3, 4, 5, 6]
// let d=a.filter(v=>{
//     if(v%2==0){
//         return v;
//     }
// })
// console.log(d);

// 2q 
// let a=
// [
//   { name: "Alice", age: 23 },
//   { name: "Bob", age: 27 },
//   { name: "Charlie", age: 30 }
// ]
// let d=a.filter((i)=>{
//     if(i.age>25){
//         return i
//     }
// })

// or

// let d=a.reduce((b,i)=>{
//     if(i.age>25){
//         b.push(i)
//     }return b;
// },[])
// console.log(d);

// 3q 

// let a=[1, 2, 2, 3, 4, 4, 5];
// let b=[];
// a.filter(i=>{
//     if(b[i]){

//     }
//     else{
//         b.push(i)
//     }
        
// })
// console.log(b);

// let a=[0, "hello", false, "", undefined, 42];
// let b=a.filter(Boolean)
// console.log(b);

// let a=[3, 12, 19, 21, 25, 30];
// let b=[];
// a.filter(i=>{
//     if(i%3==0||i>20){
//         b.push(i)
//     }
// })
// console.log(b);

// let a=[1, 2, 3, 4];
// let b=a.reduce((c,i)=>{
//     c=c*i;
//     return c;
// })
// console.log(b);

// let a= ["apple", "banana", "apple", "orange", "banana", "apple"];
// let b=a.reduce((c,i)=>{
//     if(c[i]){
//         c[i]++;
//     }
//     else{
//         c[i]=1
//     }
//     return c
// },[])
// console.log(b);

// 8q

//9q
// let people = [
//     { name: "Alice", group: "A" },
//     { name: "Bob", group: "B" },
//     { name: "Charlie", group: "A" },
//     { name: "David", group: "B" }
//   ];
//   let c=people.reduce((a,i)=>{
//     if(!a[i.group]){
//        a[i.group]=[];
//     }
//     a[i.group].push(i);
//     return a
//   },{})
// console.log(c);
