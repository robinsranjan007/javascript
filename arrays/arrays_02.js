//ARRAYS IF WE PUSH ANYTHING IT WILL PUSH COMPLETE VALUES LIKE OBJECTS OR ARRAYS NOT THE INDIVIDUAL ITEM OF ARRAYS OR OBJECTS
const marvelHeors=['Spideman','Ironman','Hulk',"Captain America",'Thor']
const DcHeors=['Superman','Batman','Aquaman',"Wonderwomen",'Latern']
marvelHeors.push(DcHeors)
console.log(marvelHeors);
const herosPowers={

    Spiderman:'web shoot',
    Ironman:'Iron suit',
    Hulk:'Smash',
    CaptainAmerica:'shild',
    Thor:'Hammer'
}

marvelHeors.push(herosPowers)
console.log(marvelHeors);

console.log(marvelHeors[6].Spiderman);

// USE CONCAT TO PUSH INDIVIDUAL ITEMS OF THE ARRAYS IN THE ARRAYS

const allheroes=marvelHeors.concat(DcHeors)

console.log(allheroes)

// -----------------NOTE CONCAT CREATES THE NEW ARRAYS AND DOESNOT MODIFY THE ORIGINAL ARRAYS----------------------


