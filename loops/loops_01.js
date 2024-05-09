//EXAMPL-1

for(let i=0;i<10;i++)
{

    console.log(i);
    if(i===5)
        {
            console.log('5 is present');
        }

}

// EXAMPL-2

for(let i=0;i<=10;i++)
 {

    for(let j=0;j<=10;j++)
        {
            console.log(i + '*' +j  +'='+ i*j);
        }
  }

//   EXAMPLE -3 FOR ARRAYS

let myarr=['flash','batman','superman','he-man']


for(let index=0;index<myarr.length;index++)
    {
        console.log(myarr[index]);
    }


//EXAMPLE -4 


// break and continue

// break
for(let i=0;i<10;i++)
    {
        console.log(i);
        if(i===5)
            {
                console.log('page filled up please continue to the next page');
                break;
            }
    }


// CONTINUE

for(let i=0;i<10;i++)
    {
        if(i===5)
            {
                console.log('continue next time');
                continue
            }
            console.log(i);

            

    }