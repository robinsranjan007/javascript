// IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS (IIFE)


(function call()
{
    console.log('calling robins on the call');
})();


// always use the ; at the end of the IIFE

//IIFE IN TERMS OF ARROW FUNCTION

(()=>{
    console.log('ROBINS IS CALLING ROBINS');
})();


// PASSING ARGUMENTS IN THE IIFE


((name)=>{
    console.log(`WELCOME ${name}`);
})('sasuke');



// ('sasuke') can be interpreted as call('sasuke')  the () at the end of the function is basically calling