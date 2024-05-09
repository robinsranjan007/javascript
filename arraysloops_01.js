// for of 
// i will take the values inside the arrays
const array =['robins','ranjan','superman','batman']

for (let  i of array) {
    
     console.log(i);
}

// FOR OF (object of arrays)

let myobj=[
{
    name:'superman',
    comic:'DC'
},
{
    name:'batman',
    comic:'DC'
},
{
    name:'Thor',
    comic:'marvel'
},
{
    name:'Ironman',
    comic:'marvel'
},
{
    name:'Siderman',
    comic:'marvel'
},
]

for(let item of myobj)
    {
console.log(`${item.name} : ${item.comic}`);
    }


// FOR OF (strings)

let str="hello robins how are you doing"

for (const s of str) {
    console.log(s);
}

// MAP IN JS 
// most important feature maps only takes unique values
//same order

const mymap=new Map()

mymap.set('a',1),
mymap.set('b',2),
mymap.set('c',3),
mymap.set('d',4),
mymap.set('e',5)
mymap.set('a',11)

console.log(mymap);


// how to use loop on MAP

for (const m of mymap) {
    console.log(m);
}

// this will give the individual method

for (const [m,k] of mymap) {
    console.log(m,k);
}

// FOR OF LOOP (objects)

let games={
    game1:'NFS',
    game2:'fifa',
    game3:'wwe2022',
    game4:'cricket 2007',
    game5:'prince of persia',
}

console.log(Object.keys(games));//changes the keys into arrays
console.log(Object.values(games));// changes the values into arrays

// note objects is not iterrable
// for (const [g,v] of games) {
//     console.log(g,v);
// }   