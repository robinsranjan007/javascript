// FOR IN (used for objects only)

let mygames = {
  game1: "NFS",
  game2: "fifa",
  game3: "wwe2022",
  game4: "cricket 2007",
  game5: "prince of persia",
};
// EXAMPLE-1

for (const key in mygames) {
   
    // console.log(key);
}

// EXAMPLE -2

for(let items in mygames)
  {
    // console.log(mygames[items]);
  }


  // FOR IN ON ARRAYS

  let myarr=['Spideman','Superman','Thor','Captain Marvel','Ironman','Heman']

  for (let items in myarr) {
     console.log(myarr[items]);
  }

  // for in vs for of in arrays

  for (const items of myarr) {
console.log(items);
  }
