function saveData(){
let name,email;
name=document.getElementById('name').value;
email=document.getElementById('email').value;

//save to local storage using object
const user={
    name:name,
    email:email
}
//use json.stringify to convert into string else it shows obj_obj
localStorage.setItem('user-copy',JSON.stringify(user));

//to get obj back we use JSON.parse
JSON.parse(localStorage.getItem('user-copy'));

//localStorage.setItem('name',name);
//localStorage.setItem('email',email);
}