// this inside the object will give reference to all the values inside the object

const users={
    uname:'robins',
    price:999,
    welcome:function(){
        console.log(`welcome to website ${this.uname}`);
        console.log(this,'inside the context');
    }
}

users.welcome()
users.uname='ranjan'
users.welcome()


// *THIS* ISIDE THE GLOBAL SCOPE WILL GIVE EMPTY OBJECT VALUE
console.log(this);

//THIS INSIDE THE FUCCTION WILL GIVE YOU HELL OF VALUES + UNDEFINED IF ANY VARIABLE IS DECLARED INSIDE THE FUNCTION AND YOU ARE TRYING TO ACCESS IT USING THE THIS

function display()
{
    const name='robins'
    console.log(this.name,this)
}
console.log(display());
 
