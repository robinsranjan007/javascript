let myobj = {
name:'thor',
power:'hammer',
height:'11.6ft',
weight:'450kg',
"special power":'thunder'
}


// note by default both key and value are strings the key is always string

let myoj = {
    "name":'thor',
    'power':'thunder hammer',
    'height':'11.6ft',
    'weight':'450kg'
    }

// ACCESSING OBJECTS

console.log(myobj['special power'])

// change values of objects

myobj['name']="HULK"

console.log(myobj);

// FREEZE THE OBJECT SO THAT NO ONE CAN MODIFY IT
Object.freeze(myobj);

myobj['power']="smash"


// create a function inside a objects

let myobjects = {
    names:'thor',
    power:'hammer',
    height:'11.6ft',
    weight:'450kg',
    "special power":'thunder',
    display:function(){
        return `hello my name is ${this.names}`
    }
    }

    myobjects.strength='679HP'
    
console.log(myobjects,myobjects.display());