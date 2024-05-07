const tinder = {}

tinder.id="123abc"
tinder.name="sammy"
tinder.isloggedIn=true;
tinder.credentials={
    email:'sammy@gmail.com',
    pass:'123456',
    date:{
        issue:'20/20/12',
        valid:'20/20/10'
    }
}



// console.log(tinder.credentials.date.issue);

// MERGING TWO OBJECTS 

// method -1
const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'d',5:'d',6:'e'}

const obj3={
     ...obj1,...obj2
}
 
// key --> points this does not modify the original objects
console.log({...obj1,...obj2});

// METHOD-2

const obj4={1:'a',2:'b',3:'c'}
const obj5={4:'a',5:'b',6:'c'}

const obj6=Object.assign({},obj4,obj5)//NOTE --> THIS WILL ASSIGN INTO THE TARGET OBJECT THEREFORE MAKE THE TARGERT OBJECT AS EMPTY
console.log(obj4);
console.log(obj6);

// VERY VERY VERY VERY VERY VERY VERY IMPORTANT

console.log(Object.keys(tinder)) //THIS WILL RETURN THE KEYS OF ARRAYS

//VERY VERY VERY VERY VERY IMPORTANT SIMILIARLY WE CAN DO FOR THE VALUES 
//WE CAN LOOP AND CONVERTY EVERYTHING INTO ARRAYS

console.log(Object.values(tinder));

//ENTRIES

console.log(Object.entries(tinder))

//ONE MORE IMPORTANT

console.log(tinder.hasOwnProperty('id'));