"use strict"

// comparisons

console.log(2>3);
console.log(2<3);
console.log(2<=3);
console.log(2>=3);

// some conversion comparisons

console.log("2" > 3);
console.log("2" < 3);
console.log("2" <= 3);
console.log("2" >= 3);

// some tricky with null operator

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// note--> The reason is that the equality check == and comparisons operator works differently 
// comparisons convert null to a number , treating it as zero the reason the (1) is giving false and (3) is giving true


// some comparison of undifined

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);


// strict checking also check datatye
// == start the conversion

console.log(2=="2");
console.log(2==="2");

