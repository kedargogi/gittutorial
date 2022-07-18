function saveData(event){
   event.preventDefault();
    //alert("hey");
    let name,email;
    name=document.getElementById('name').value;
    email=document.getElementById('email').value;
    
    //localStorage.setItem('name',name);
    //localStorage.setItem('email',email);
    //save to local storage using object
    const user={
        name:name,
        email:email
    }
    //use json.stringify to convert into string else it shows obj_obj
    localStorage.setItem(user.email,JSON.stringify(user));
    
    //to get obj back we use JSON.parse
    JSON.parse(localStorage.getItem('user'));
    showUserOnScreen(user);
    event.preventDefault();
    //localStorage.setItem('name',name);
    //localStorage.setItem('email',email);
    } 

    function showUserOnScreen(user){
        //e.preventDefault();
        let parentNode= document.getElementById('listofUsers');
        let childHTML = ` <li>${user.name}  -  ${user.email}</li>`;
        parentNode.innerHTML=parentNode.innerHTML + childHTML;
    }

    document.addEventListener("DOMContentLoaded", function (event) {
        Object.keys(localStorage).forEach((key) => {
            let stringifiedDetailsOfPeople = localStorage.getItem(key);
            let detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
            showUserOnScreen(detailsOfPeople);
            });
        });
    
        