let myarrys = ['spiderman','batman','superman','Ironman','heman','luxemburg']

myarrys.forEach(items=>(console.log(items)))

// most important thing

myarrys.forEach((item,index,myarrys)=>{
// console.log(`item: ${item} | index:${index} | myarrays:  ${myarrys} `);
})
 

// for each does not work on objects
 let myobj={

    green:'hulk',
    red:'Ironman',
    white:'Dr. strange',
    black:'balck panther',
    yellow:"thor"
 }

 for(let items in myobj)
    {
    
        // console.log(myobj[items]);
    }


// MOST IMPORTANT USE CASE OF ARRAYS FOR EACH
    let heroslist=[
       
            {
                name:'superman',
                comic:'DC'
            },
            {
                name:'batman',
                comic:'DC'
            },
            {
                name:'Thor',
                comic:'marvel'
            },
            {
                name:'Ironman',
                comic:'marvel'
            },
            {
                name:'Siderman',
                comic:'marvel'
            },

    ]

    heroslist.forEach(item => {
        // console.log(item.name);
    });

    // SAME UP AND DOWN

    for(let item of heroslist)
        {
            console.log(item,'heroes');
        }

