console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('ticket');}, 3000);
});

const getPopcorn =  promiseWifeBringingTickets.then((t) => {
    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i need popcorn');
    return new Promise((resolve, reject)=>{return resolve(`${t} popcorn`)});
});

const getButter = getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve, reject)=>{return resolve(`${t} butter`)});
});

const getColdDrinks = getButter.then((t)=>{
    console.log('husband: i got some butter');
    console.log('husband: we should go in');
    console.log('wife: i need some cold drinks');
    return new Promise((resolve, reject)=>{return resolve(`${t} coolDrinks`)});
});

const preMovie =  getColdDrinks.then((t)=>{
    console.log('husband: i got some cold drinks');
    console.log('husband: enything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');
    return new Promise((resolve, reject)=>{return resolve(t)});
});

preMovie.then((t)=>{
    console.log(`Person3 has ${t}`);
    console.log('Person3: shows ticket');
});
// const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve('ticket');}, 3000);
// });

// const getPopcorn =  promiseWifeBringingTickets.then((t) => {
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i need popcorn');
//     return new Promise((resolve, reject)=>{return resolve(`${t} popcorn`)});
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject)=>{return resolve(`${t} butter`)});
// });

// const getColdDrinks = getButter.then((t)=>{
//     console.log('husband: i got some butter');
//     console.log('husband: we should go in');
//     console.log('wife: i need some cold drinks');
//     return new Promise((resolve, reject)=>{return resolve(`${t} coolDrinks`)});
// });

// const preMovie =  getColdDrinks.then((t)=>{
//     console.log('husband: i got some cold drinks');
//     console.log('husband: enything else darling?');
//     console.log('wife: lets go we are getting late');
//     console.log('husband: thank you for the reminder *grins*');
//     return new Promise((resolve, reject)=>{return resolve(t)});
// });

// preMovie.then((t)=>{
//     console.log(`Person3 has ${t}`);
//     console.log('Person3: shows ticket');
// });


// const preMovie1 = async ()=>{

//     const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
//         setTimeout(()=>{return resolve('ticket');}, 3000);
//     });
//     const getPopcorn = new Promise((resolve, reject)=>{return resolve(`popcorn`)});
//     const getButter = new Promise((resolve, reject)=>{return resolve(`butter`)});
//     const getColdDrinks = new Promise((resolve, reject)=>{return resolve('cold Drinks')});

//     let ticket = await promiseWifeBringingTickets;
//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i need popcorn');
//     let popcorn = await getPopcorn;
//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     let butter = await getButter;
//     console.log(`husband: i got some ${butter}`);
//     console.log('husband: we should go in');
//     console.log('wife: i need some cold drinks');
//     let coldDrinks = await getColdDrinks;
//     console.log(`husband: i got some ${coldDrinks}`);
//     console.log(`husband: enything else darling?`);
//     console.log(`wife: lets go we are getting late`);
//     console.log('husband: thank you for the reminder *grins*');

//     return ticket;

// };

// preMovie1().then((ticket)=>{return console.log(`person3: shows ${ticket}`)});


// resolving with promiss.all

const preMovie1 = async ()=>{

    const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
    const preMovie1 = async ()=>{
    const getColdDrinks = new Promise((resolve, reject)=>{return resolve('cold Drinks')});

    let ticket = await promiseWifeBringingTickets;
    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i need popcorn');
    // let popcorn = await getPopcorn;
    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: i need butter on my popcorn');
    // let butter = await getButter;
    // console.log(`husband: i got some ${butter}`);
    // console.log('husband: we should go in');
    // console.log('wife: i need some cold drinks');
    // let coldDrinks = await getColdDrinks;
    // console.log(`husband: i got some ${coldDrinks}`);
    // console.log(`husband: enything else darling?`);
    // console.log(`wife: lets go we are getting late`);
    // console.log('husband: thank you for the reminder *grins*');


    let [popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
    console.log(`${popcorn}, ${butter}, ${coldDrinks}`);
    return ticket;

    };

preMovie1().then((ticket)=>{return console.log(`person3: shows ${ticket}`)});

    
// resolving with promiss.all

// const preMovie1 = async ()=>{

//     const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
//         setTimeout(()=>{return resolve('ticket');}, 3000);
//     });
//     const getPopcorn = new Promise((resolve, reject)=>{return resolve(`popcorn`)});
//     const getButter = new Promise((resolve, reject)=>{return resolve(`butter`)});
//     const getColdDrinks = new Promise((resolve, reject)=>{return resolve('cold Drinks')});

//     let ticket = await promiseWifeBringingTickets;

//     let [popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
//     console.log(`${popcorn}, ${butter}, ${coldDrinks}`);
//     return ticket;

// };


// reject 

// const preMovie1 = async ()=>{
//     const promiseWifeBringingTickets = new Promise((resolve, reject)=>{
//         setTimeout(()=>{return reject('ticket');}, 3000);
//     });
//     let ticket;
//     try {
//         ticket = await promiseWifeBringingTickets;
//     } catch(e) {
//         ticket = 'sad Face';
//     }
//     return ticket;
// };
//preMovie1().then((ticket)=>{return console.log(`person3: shows ${ticket}`)});
    }
)}
console.log('person4: shows ticket');
console.log('person5: shows ticket');


    


async function printPosts(){
    await createPost({title: 'post three', body: 'this is post three'}).then(getPosts);
    await createPost({title: 'post four', body: 'this is post four'}).then(getPosts);
    await createPost({title: 'post five', body: 'this is post five'}).then(getPosts);
}
printPosts();