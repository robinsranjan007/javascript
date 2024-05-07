// HOW TO HANDLE OBJECTS IN FUNCTIONS

const user={
    name:'robins',
    price:199
}

function handleobjects(user)
{
return user;
}

console.log(handleobjects(user));

console.log(handleobjects({
    name:'robins',
    price:199
}));


// HOW TO PASS ARAAYS

function returnarrays(val)
{
    return val[2]
}

console.log(returnarrays([1,2,3,4,5,6]));