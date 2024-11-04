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
//     if(b.includes(i)){
//         return false
//     }
//     else{
//         b.push(i)
//         return true
//     }       
// })
// console.log(b);

//4q
// let a=[0, "hello", false, "", undefined, 42];
// let b=a.filter(Boolean)
// console.log(b);

//5q
// let a=[3, 12, 19, 21, 25, 30];
// let b=[];
// a.filter(i=>{
//     if(i%3==0||i>20){
//         b.push(i)
//     }
// })
// console.log(b);

// 6q 
// let a=[1, 2, 3,4];
// product(a);
// function product(a){
// let b=a.reduce((c,i)=>{
//     c=c*i;
//     return c;
// })
// console.log(b);
// }

// 7q  
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
// arr=[1,[2,3],[4,[5,6]]];
// console.log(flatten(arr));
// function flatten(a){
// return a.reduce((c,i)=>{
//         if(Array.isArray(i)){
//            return c.concat(flatten(i))
//         }
//         else{
//            return c.concat(i)
//         } 
//     },[])    
// }



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



// 10q 
// arr=[['name', 'Alice'], ['age', 25], ['job', 'Engineer']];
// function getKeys(arr){
//     return arr.reduce((b1,c)=>{
//         b1[c[0]]=c[1];
//         return b1
//     },[])
// }
// console.log(getKeys(arr));



// arr([1, 2, 2, 3, 4, 4, 5]);
// let a1=[];
// function arr(a) {
//     a.filter(v=>{
//         if(a1[v]) {                   
//         }
//         else {
//             a1.push(v)
//         }
        
//     });
// }
// console.log(a1);