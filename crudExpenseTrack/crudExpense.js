const crudcrud='https://crudcrud.com/api/e5ce4f80a5674b859f8a860a7c807fe2';
const submitbtn=document.getElementById('submitbtn');
const form=document.getElementById('forms');
const amount=document.getElementById('amt');
const description=document.getElementById('desc');
const category=document.getElementById('cat');
const ul=document.getElementById('detailAdded')


// Submit button functionality
submitbtn.addEventListener('click',add)
function add(e){
    e.preventDefault();
    if(amount.value==''||description.value==''){
        const msg=document.getElementById('msg')
        msg.textContent='Enter all Fields';
        msg.style.color='red'
        setTimeout(()=>{msg.remove()},3000);
    }
    else{

        const obj={
            'amount': amount.value,
            'category':category.value,
            'description':description.value,
        } 
        amount.value='';
        category.value='';
        description.value='';

        //Adding Expense to server and once added 
        //then showing it on screen
        addExpense(obj)
        .then(id=>showExpenses(obj,id))
        .catch(err=>console.log(err))
    }
}

//Adding expense using crudcrud
async function addExpense(obj){
    let id;
    await axios.post(`${crudcrud}/expenseTracker`,obj)
          .then(res=>{
              id=res.data._id;
          })
          .catch(err=>console.log(err));
    return Promise.resolve(id);
}  

//Displaying Expenses
function showExpenses(obj,id){
    const li=document.createElement('li')
    li.innerHTML=`${obj.amount} : ${obj.category} : ${obj.description} 
    <button onclick=editExpense('${id}')> Edit </button> 
    <button onclick=deleteExpense('${id}')> Delete </button>`
    ul.appendChild(li);
}

//getting Data from crudCrud and displaying on screen
function getAndDisplay(){
    axios.get(`${crudcrud}/expenseTracker`)
    .then(res=>{
        res.data.forEach(expense=>{
            showExpenses(expense,expense._id)
        })
    })
    .catch(err=>console.log(err))
}
document.addEventListener('DOMContentLoaded',()=>{
    getAndDisplay()
})


//dlt btn functionality
function deleteExpense(id){
    ul.removeChild(event.target.parentElement);
    axios.delete(`${crudcrud}/expenseTracker/${id}`)
    .then(res=>console.log('deleted'))
    .catch(err=>console.log(err))
}

//Edit btn functionality
function editExpense(id){
    ul.removeChild(event.target.parentElement);
    axios.get(`${crudcrud}/expenseTracker/${id}`)
    .then(res=>{
        amount.value=res.data.amount;
        description.value=res.data.description;
        category.value=res.data.category;
    })
    .catch(err=>console.log(err))

    axios.delete(`${crudcrud}/expenseTracker/${id}`)
    .then(res=>console.log('deleted'))
    .catch(err=>console.log(err))
}
