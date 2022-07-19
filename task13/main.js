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
         if(localStorage.getItem(user.email)!==null){
            //remove user from screen
         }
         let parentNode= document.getElementById('listofUsers');
         let childHTML = ` <li id=${user.email}>${user.name}  -  ${user.email}
                        <button onclick=deleteUser('${user.email}')>Delete User</button>
                        <button onclick=editUser('${user.email}','${user.name}')>Edit User</button>
                            </li>`;
         parentNode.innerHTML=parentNode.innerHTML + childHTML;
     }
 
     document.addEventListener("DOMContentLoaded", function (event) {
         Object.keys(localStorage).forEach((key) => {
             let stringifiedDetailsOfPeople = localStorage.getItem(key);
             let detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
             showUserOnScreen(detailsOfPeople);
             });
         });
     
         function deleteUser(email){
            localStorage.removeItem(email);
            removeUserFromScreen(email)
         }

         function removeUserFromScreen(email){
            let parentNode= document.getElementById('listofUsers');
            let childNodeToDelete =document.getElementById(email);
            parentNode.removeChild(childNodeToDelete);
         }

         function editUser(email,name){
            document.getElementById('name').value=name;
            document.getElementById('email').value=email;
            deleteUser(email);
         }