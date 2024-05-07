"use strict"

const name='robins'
const repocount = 50;

// console.log(typeof(name +' '+ repocount)) it will give string
// console.log((name +' '+ repocount)) better not use this insted use the below method

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName = 'god of wars'

console.log(gameName[0]);
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(9))
console.log(gameName.indexOf('o'))
console.log(gameName.substring(0,5));//last value is not included
console.log(gameName.slice(0,4));
console.log(gameName.trim())//removes space from start and end
console.log(gameName.replace('god','lord'));
console.log((gameName.includes(' w')));


// CONVERTING STRING TO ARRAYS VERY IMPORTANT 

console.log(gameName.split(' '))

// reversing a string

console.log(gameName.split(' ').reverse().join(' '));


// SLICE AND SPLICE

// note --> SPLICE CHANGES THE ORIGINAL STRING

const str ="hello robins how are you doing today?"
const str2="yeah great! thanks bitch"

console.log(str.slice(0,5))
console.log(str)

let myarr=[1,2,3,4,45,5,6,6]

console.log(myarr.slice(0,4))
console.log(myarr)

console.log(myarr.splice(0,3))


