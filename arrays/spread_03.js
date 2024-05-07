// USE MORE AMAZING OPERATOR CALLED SPREAD OPERATOR to merge two arrays


const marvelHeors=['Spideman','Ironman','Hulk',"Captain America",'Thor']
const DcHeors=['Superman','Batman','Aquaman',"Wonderwomen",'Latern']


const newcollection = [...DcHeors,...marvelHeors,'ranjan','robins']
console.log(newcollection)


// ANOTHE USEFUL USE

const arr=[1,2,3,4,5,[11,12,13,14],6,7,8,[21,31,41,[33,44,55,66]]]

const flatarray =arr.flat(Infinity)
console.log(flatarray)

// ONE MORE WAY TO CREATE AN ARRAY FROM A STRING
let str="hello my name is robins and my hobbies is coding"
console.log(Array.from("helloworld")) //1

console.log(str.split(' ')) //2


// INTERESTING CASE

console.log(Array.from({name:'Robins'})) //returns empty string whenever it is not able to convert it

// MORE WAYS TO CONVERT IT INTO ARRAYS

let score1=94;
let score2= 55;
let score3= 33;

console.log(Array.of(score1,score2,score3))

