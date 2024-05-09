// EXAMPLE-1

function addTwoNumber(num1,num2)
{
return num1+num2}

console.log(addTwoNumber(10,3));

// EXAMPLE-2

function addThreeNumber(num1,num2,num3)
{
return num1+num2+num3;
}

console.log(addThreeNumber(10,3,'5'));

//EXAMPLE-3

function addAll(...numbers)
{
    return numbers
}

console.log(addAll(11,12,13,133,44,53));

// EXAMPLE-4

function addnum(num1,num2,...values)
{
    return num1+num2+values;
}

console.log(addnum(1,2,3,4,5),'what');