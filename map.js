// MAP  MOST IMPORTANT

const mynum=[1,2,3,4,5,6,7,8,9]


const nums=mynum.map((item)=>item*10)

// console.log(nums);


// CHANINIG USING MAP MOST IMPORTANT

// CHAINING more number of map

const newnum=[1,2,3,4,5,6,7,8];

const newarrs = newnum
  .map((item) => {return item * 10})
  .map((item) => {
    return item + 1;
  })
  .filter((item) => {
    return item > 50;
  });

console.log(newarrs);



// MAPS on arrays of objects
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

//   example -1 return objects modified
const persons=people.map((items)=>{
    return {name:items.name.toUpperCase(),age:items.age+1}
})

console.log(persons);


// example returning as it is

const human=people.map((items)=>{
    return items
})
console.log(people);


// example 3 adding new properties using spread operator and map

const peps = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];


 let pepping= peps.map((item)=>{
    return {...item,country:'India'}
  })

  console.log(pepping);
 