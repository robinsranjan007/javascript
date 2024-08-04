// METHODS OF STRING IN JAVASCRIPT


// 1- charAt()

let str ="robins is a super hero"

console.log(str.charAt(5))

//2- CharCodeAt()

console.log(str.charCodeAt(5))

//3 concat()

let str2='hello robins'
console.log(str.concat(str2,'what the heck this sentence doesnot make sense','okay','stop no'));


//4-includes()

console.log(str.includes('a super hero'))

//5-indexOf()

console.log(str.indexOf('s'))

//6- lastIndexOf()
console.log(str.lastIndexOf('r'))


//7-replace() does not modify the original value
let rr=str.replace('hero','villain')
console.log()

// 8-slice() 

let sliced = str.slice(2,3)
console.log(sliced)

//9 split()

let arrs= str.split(' ')
console.log(arrs)

//10 substring()

let sub =str.substring(2,5);
console.log(sub)

//11 substr() depricated


//12 tolowercase()

let caps= 'HELLO ROBINS RANJAN HOW ARE YOU DOING'
console.log(caps.toLocaleLowerCase())
//trim()

let splitstr='           hello what is        this        are you     okay'
let trimmed=splitstr.trim()
console.log(trimmed)

//startswith()

let strtsstr='hello robins how are you'

console.log(strtsstr.startsWith('mouse'))

//repeat()

let repeat='hello hello hello elephant'

console.log(repeat.repeat(3))