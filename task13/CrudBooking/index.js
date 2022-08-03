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
        //  user={
        //     _id:'',
        //     name:'',
        //     email:''
        //  }
         if(localStorage.getItem(user.email)!==null){
            removeUserFromScreen(user.email);
         }
         let parentNode= document.getElementById('listofUsers');
         let childHTML = ` <li id=${user._id}>${user.name}  -  ${user.email}
                        <button onclick=deleteUser('${user._id}')>Delete User</button>
                        <button onclick=editUser('${user.email}','${user.name}','${user._id}')>Edit User</button>
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
     
         function deleteUser(userId){
            axios.delete(`https://crudcrud.com/api/0cb5629fc3ef410390dc1c7585e7fe75/appointmentData/${userId}`)
            .then((res)=>{
                
                removeUserFromScreen(userId);
                
                
                //console.log(res);
             })
             .catch((err)=>{
                //document.body.innerHTML=document.body.innerHTML +",<h4>Something went Wrong!</h4>";
                console.log(err);
            }) 
            //localStorage.removeItem(email);
           
         }

         function removeUserFromScreen(userId){
            let parentNode= document.getElementById('listofUsers');
            let childNodeToDelete =document.getElementById(userId);
            if(childNodeToDelete){
                parentNode.removeChild(childNodeToDelete);
            }
            
         }

         function editUser(email,name,userId){
            document.getElementById('name').value=name;
            document.getElementById('email').value=email;
            deleteUser(userId);
         }