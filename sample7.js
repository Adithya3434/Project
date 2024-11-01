// // let a=10.567;
// let date = "2024-10-21,16:30:30"; 
// let d = new Date(date);
// // let b=a.toFixed(0);
// // console.log(a.toFixed(8));
// console.log(d);
// console.log(d.getFullYear());
// console.log(d.getMonth()+1);
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.toString());
// d.setFullYear(2001);
// console.log(d.getFullYear());
// d.setMonth(2);
// console.log(d.getMonth());
// d.setDate(23);
// console.log(d.getDate());
// d.setHours(12);
// console.log(d.getHours());
// d.setMinutes(0);
// console.log(d.getMinutes());
// d.setSeconds(57);
// console.log(d.getSeconds());
// console.log(d.toString());
// console.log(d.getTime()); 
// let a=10.56;
// console.log(Math.round(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// let c=d.getMilliseconds();
// console.log(c);


// let d="adithya s nair";
// r=d.replace(/ /g,"");
// console.log(r);
// let e=r.replace(/a/g,"@")
// console.log(e);
// console.log(e.charAt(8));
// console.log(e.charCodeAt(8));
// console.log(e.at(-4));
// console.log(d.slice(-14,-7));

// let a=-11.67;
// let b=4;
// let c="3";
// console.log(Math.abs(a));
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.round(a));
// console.log(Math.pow(b,3));
// console.log(Math.sqrt(b));
// console.log(Math.log(4));
// console.log(Math.exp(b));
// console.log(Math.random()* b);
// console.log(Math.max(b));
// console.log(Math.min(b));
// console.log(Number.parseInt(c));
// console.log(Number.parseFloat(c));
// console.log(isNaN("hello"));
// console.log(Number.isInteger(b));
// console.log(b.toFixed(2));
// console.log(b.toExponential(6));
// console.log(b.toPrecision(4));
// let big=BigInt("1234567890212445792");
// console.log(big);
// let ad=1234567890212445792;
// console.log(ad);
// let z=[1,2,3];
// let x=[4,5,6];
// let t=["ice","heat","snow"];
// let d=t.slice(1,2);
// console.log(d);

let  obj={
    name:"ady",
    no:123456789
}
let a=[1,2,3,4,5,6,obj]
console.log(a);
for(let b of a){
    console.log(a[b]);
}
for(let b in a){
    console.log(b);
}
for(let b in obj){
    console.log(b);
    console.log(obj[b],);
    
}

