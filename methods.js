let arrays=[12,34,56,78,44,23,12];

let fruits = ["apple", "banana", "cherry", "date"];

const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Charlie", age: 32 }
  ];
  

// 1---- indexOf()   a- not used on arrays of objects

console.log(arrays.indexOf(34))  //returns index of first element if present else -1
console.log(arrays.indexOf(100))
console.log(fruits.indexOf('banana'))

// 2 --lastIndexOf()  // returns the index of the last element if present  a- not used on arrays of objects

console.log(arrays.lastIndexOf(12))

//3 - find() it takes a call back method and gives the entire result It returns the first element that matches the condition or undefined if no such element is found.

let element=users.find((val)=>{
    return val.id===2
})

let elements=users.find((val)=>{
    return  val.id===12
})

let number=arrays.find((val)=>val>10) //returs the first element greater then 10

console.log(element,elements,number);


//4 findIndex()  it also takes an callback method and returns an index value if the condition matches else -1

let index =arrays.findIndex((val)=>val>12)
let indexof =arrays.findIndex((val)=>val>1000)

let objindex = users.findIndex((val)=>val.id===2)

console.log(index,indexof,objindex)


//5 finsLast() similiar to find() it just returns the last element which matches the conditon else it return undefined remember element not index 

const numbers = [1, 3, 7, 4, 10, 15, 6];

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 29 },
    { name: 'David', age: 34 },
  ];

let lastnumber =numbers.findLast((val)=>val%2==0)
let lastppl = people.findLast((val)=>val.age>30 )

console.log(lastnumber,lastppl)


//6 findLastIndex() it returns the index and -1 from the last if the element is present or not it does not returns element

let lastindex =numbers.findLastIndex((val)=>val%2==0)
let lastobjindex=people.findLastIndex((val)=>val.age>20)

console.log(lastindex,lastobjindex)

//7 splice()  it is used to add remove and replace element
// modifies the real array
// 7- 1 removes elements  ()
const fruit = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];

let fr=fruit.splice(1,2) //includes 1 and modifies the original arrays
console.log(fruit)
console.log(fr)


const colors = ['Red', 'Green', 'Blue'];

// 7-2 add new elements

colors.splice(1,0,'orange','mango') //starts at 3 including 3 then delete 0 element that means 3 then add two new elements
console.log(colors)


// 7 -3 replacing elements

const animals = ['Dog', 'Cat', 'Elephant']; //replace cat with bat and crocodile modifies the original arrays

animals.splice(1,'Bat','Crocodile') 
console.log(animals)


// 7- 4 remove all elements

animals.splice(0)
console.log(animals)

//7-5 examples of arrays of objects
const employees = [
    { id: 1, name: 'John', position: 'Developer' },
    { id: 2, name: 'Jane', position: 'Designer' },
    { id: 3, name: 'Steve', position: 'Manager' },
    { id: 4, name: 'Mary', position: 'Analyst' }
  ];

 employees.splice(0,2) 
 console.log(employees)
 employees.splice(0,0 ,{id:15,name:'robins'},{id:25,name:'ranjan'})
 console.log(employees)


//8 concat() merge two and more arrays returning a new arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  const array4 = [
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' }
  ];

let arraysCombined=array1.concat(array1,array2,people,animals)
console.log(array1) //does not modify the original arrays
 console.log(arraysCombined)

 let arrayscomb = array3.concat(array3,array4,array1)
 console.log(arrayscomb)


//9- copyWithin() it lets you copy the portion to other location within the same array 

let ars=[34,56,78,98,65,43,21]

ars.copyWithin(3,4,6);
console.log(ars);



//10- fill() 

let fillarr=[1,2,3,4,45,5,6,7]

fillarr.fill(777,3,5)

console.log(fillarr);
fillarr.fill(0)

console.log(fillarr)

//11-some() it takes a call back function it takes a val and index it return true and false

const uses = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

let boolval=uses.some(val=>val.id>10)
console.log(boolval)


//12 every()  it takes callback method and it checks wheather every element of arrays matches the condition true else false

let checkprop =uses.every((val)=>val.hasOwnProperty('name'))
console.log(checkprop);

//13 includes() only for primitive data it gives true and false


let priarr=[45,45,354,67,86,33]

console.log(priarr.includes(90))

//14 sort() it can sort both assending and desceding order

priarr.sort((a,b)=>a-b) //assending order
console.log(priarr)

priarr.sort((a,b)=>(b-a))
console.log(priarr)

//15 reverse() modifies the original arrays

priarr.reverse()

console.log(priarr)

16// join()

let allarrays=[23,24,56,78,65,43,33,99]

console.log(allarrays.join(','))

17// slice() returns a part of the array does not modify the originl arrays

let superarrays =[999,888,777,666,55,44,33,22,11]

let sliced=superarrays.slice(0,2)
console.log(sliced)
console.log(superarrays)


