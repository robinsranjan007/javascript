"use strict" 

const accountId =11234

let accountEmail = "robins@gmail.com"//always use let it's better for the block and global 

var accountPassword = 1234 //don't use var anymore it's old school anyways instead use let 

// accountCity = "new Delhi" //not good idea always declare the datatype

let accountCity ="new Delhi"

// accountId=2 can't modify const parameters


// modify other parameters

// note --> all other parameters are modified
accountEmail ="Ranjan@gmail.com"
accountPassword = 909090
accountCity = 'patna'

console.table([accountId,accountEmail,accountPassword,accountCity]);

