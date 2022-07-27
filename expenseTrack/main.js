function saveData(event){
    event.preventDefault();
     
     let exp,desp,cat;
     exp=document.getElementById('exp').value;
     desp=document.getElementById('desp').value;
     cat=document.getElementById('cat').value;
     //localStorage.setItem('name',name);
     //localStorage.setItem('email',email);
     //save to local storage using object
     const user={
         exp:exp,
         desp:desp,
         cat:cat
     }
     //use json.stringify to convert into string else it shows obj_obj
     localStorage.setItem(user.exp,JSON.stringify(user));
     
     //to get obj back we use JSON.parse
     JSON.parse(localStorage.getItem('user'));
     showUserOnScreen(user);
     event.preventDefault();
     //localStorage.setItem('name',name);
     //localStorage.setItem('email',email);
     } 
 
     function showUserOnScreen(user){
         //e.preventDefault();
         if(localStorage.getItem(user.exp)!==null){
            removeUserFromScreen(user.exp);
         }
         let parentNode= document.getElementById('listofUsers');
         let childHTML = ` <li id=${user.exp}>${user.exp} - ${user.desp} - ${user.cat}
                        <button onclick=deleteUser('${user.exp}')>Delete User</button>
                        <button onclick=editUser('${user.exp}','${user.desp}','${user.cat}')>Edit User</button>
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
     
         function deleteUser(exp){
            localStorage.removeItem(exp);
            removeUserFromScreen(exp)
         }

         function removeUserFromScreen(exp){
            let parentNode= document.getElementById('listofUsers');
            let childNodeToDelete =document.getElementById(exp);
            if(childNodeToDelete){
                parentNode.removeChild(childNodeToDelete);
            }
            
         }

         function editUser(exp,desp,cat){
            document.getElementById('exp').value=exp;
            document.getElementById('desp').value=desp;
            document.getElementById('cat').value=cat;
            deleteUser(exp);
         }