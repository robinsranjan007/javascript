// THIS KEYWORD INSIDE THE REGULAR FUNCTION WILL GIVE YOU 

const display=function()
{
    const users='eagle'
    console.log('hello robins '+this.users);
}

display()

// THIS KEYWORD INSIDE THE ARROW FUNCTION will give undefined

function hawk()
{
const users='robins'
console.log(this.users);
}

hawk()



// arrow function using {} curly braces will need to add return keyword

// EXPLICIT RETURN
const addthreenum =(num1,num2,num3)=>{
    return num1+num2+num3
}

console.log(addthreenum(1,1,1));


// IMPLICIT RETURN
// VERY VERY IMPORTANT IMPLICIT RETURN OF THE ARROW FUNCTION no need to use braces and no need to write the return key word

const add= (num1,num2)=> (num1+num2);

console.log(add(12,13));