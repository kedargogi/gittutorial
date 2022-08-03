
const posts=[
    {title:'Post one' , body:'This is post one'},
    {title:'Post two' , body:'This is post two'},
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong!!!');
            }
            },1000);
    });
    
}


function deletePost(post){
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            if(posts.values !== 0){
                resolve(posts.pop());
            }

            else{
                reject('Array is empty now');
            }
        },2000);
    
    })
}




createPost({title:'Post three', body:'This is post three'})
.then(() => {
    getPosts()
    deletePost().then(() => {
        getPosts()
    })
})
.catch(err => console.log(err))
.then(deletePost)
.catch(err => console.log(err))
.then(deletePost)
.catch(err => console.log(err))
.then(deletePost)
.catch(err => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye")
});

Promise.all([promise1, promise2, promise3]).then((
    (values) => console.log(values)
));


const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.lastactivitytime = new Date().getTime();
        resolve(posts.lastactivitytime)
    }, 1000)
})    


Promise.all([createPost, updateLastUserActivityTime]).then((
    (values) => console.log(values)
)).catch(err => console.log(err))

