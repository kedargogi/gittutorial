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
     //localStorage.setItem(user.email,JSON.stringify(user));
     axios.post("https://crudcrud.com/api/0cb5629fc3ef410390dc1c7585e7fe75/appointmentData",user)
     .then((res)=>{
        showUserOnScreen(res.data);
        //console.log(res);
     })
     .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML +",<h4>Something went Wrong!</h4>";
        console.log(err);
    }) 

     //to get obj back we use JSON.parse
     JSON.parse(localStorage.getItem('user'));
     //showUserOnScreen(user);
     event.preventDefault();
     //localStorage.setItem('name',name);
     //localStorage.setItem('email',email);
     } 
 
     function showUserOnScreen(user){
         //e.preventDefault();
         if(localStorage.getItem(user.email)!==null){
            removeUserFromScreen(user.email);
         }
         let parentNode= document.getElementById('listofUsers');
         let childHTML = ` <li id=${user.email}>${user.name}  -  ${user.email}
                        <button onclick=deleteUser('${user.email}')>Delete User</button>
                        <button onclick=editUser('${user.email}','${user.name}')>Edit User</button>
                            </li>`;
         parentNode.innerHTML=parentNode.innerHTML + childHTML;
     }
 
     document.addEventListener("DOMContentLoaded",  ()=> {
        axios.get("https://crudcrud.com/api/0cb5629fc3ef410390dc1c7585e7fe75/appointmentData")
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                showUserOnScreen(res.data[i]);
            }
            
            //console.log(res);
         })
         .catch((err)=>{
            //document.body.innerHTML=document.body.innerHTML +",<h4>Something went Wrong!</h4>";
            console.log(err);
        }) 
        //  Object.keys(localStorage).forEach((key) => {
        //      let stringifiedDetailsOfPeople = localStorage.getItem(key);
        //      let detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        //      showUserOnScreen(detailsOfPeople);
        //      });
         });
     
         function deleteUser(email){
            localStorage.removeItem(email);
            removeUserFromScreen(email)
         }

         function removeUserFromScreen(email){
            let parentNode= document.getElementById('listofUsers');
            let childNodeToDelete =document.getElementById(email);
            if(childNodeToDelete){
                parentNode.removeChild(childNodeToDelete);
            }
            
         }

         function editUser(email,name){
            document.getElementById('name').value=name;
            document.getElementById('email').value=email;
            deleteUser(email);
         }