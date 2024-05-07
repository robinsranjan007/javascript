//OBJECT DESTRUCTURING

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Developer"
};

let {firstName,lastName,age,occupation}=person
console.log(firstName,lastName,age,occupation)

//method two

const {firstName:fname}=person;
console.log(fname);

console.log(Object.keys(person))