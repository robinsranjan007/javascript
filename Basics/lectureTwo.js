"use strict"

// alert(3+3) we are using nodejs not browser this will only work in browser 
let score = "33";

console.log(typeof score,1);
console.log(typeof(score),2);

console.log(typeof Number(score),3);
console.log(Number(score),4);

// what if the score is not just 33 but it's 33abc in that case what will be the output

let scorenew = '33abcd'

console.log(Number(scorenew),5); // it's getting converted but not exactly

// incase of null

let temp= null;
console.log(Number(temp),7);

// incase of undefined

let climate = undefined;
console.log(Number(climate),8);

// incase of boolean

let reality = false;
let truthy = true;
console.log(Number(reality),Number(truthy),9)

// conversion to Boolean
// 1--> true;
// 0--> false
// '' --> false
// 'robins' --> true
