// very important 
// reduce on plain arrays

let arrs=[1,2,3,4,5,6]

const sum=arrs.reduce((accum,current)=> {return accum+current},0)

console.log(sum);


// REDUCE ON ARRAYS OF OBJECTS

const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Pants', price: 30 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 10 }
  ];

  const totalsum=products.reduce((accum,current)=>{
    return accum+current.price
  },0)

  console.log('the product total cost is : '+totalsum);