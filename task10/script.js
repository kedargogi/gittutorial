function saveData(){
let name,email;
name=document.getElementById('name').value;
email=document.getElementById('email').value;

localStorage.setItem('name',name);
localStorage.setItem('email',email);
}