let heros=['spiderman','superman','batman','hulk','thor','blackpanther']

const values =heros.forEach(item => {
    console.log(item);
    return item;
});

console.log(values);//foreach doesnot return 


// LET'S SEE HOW TO RETURN A METHOD CAUSE NO LOOPS CAN RETURN ANY THING LETS LEARN MAP NOW

// FILTER WILL RETURN THE ARRAYS 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const bignumber= myNums.filter((item)=> item>5)

console.log(bignumber,'this is the big number');

//FILTER ON ARRAYS OF OBJECTS

const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Book', price: 20, category: 'Stationery' },
    { name: 'Headphones', price: 150, category: 'Electronics' },
    { name: 'Pen', price: 2, category: 'Stationery' }
  ];

  const electronics=products.filter((item)=>item.category==='Electronics')
  console.log(electronics);

  