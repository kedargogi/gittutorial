var timestamp = new Date().getTime();
const posts=[
    {title:'Post one' , body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post two' , body:'This is post two',createdAt:new Date().getTime()},
];
let intervalId=0;

function getPost(){
    //clearInterval(intervalId); //Mutiple setTimeout are running hence we need to clear it
    intervalId=setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+= `<li>${post.title} last updated ${(new Date().getTime()-post.createdAt)/1000}sec ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}
//getPost();
intervalId=setInterval(getPost, 1000);

createPost({title:'Post three', body:'This is post three',createdAt:timestamp},getPost);
createPost({title:'Post four', body:'This is post four',createdAt:timestamp},getPost);