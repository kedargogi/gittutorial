//Adding changes in branch

const ul = document.querySelector('.items');

const btn = document.querySelector('.btn');

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Hi';
ul.lastElementChild.innerHTML = '<h3>Hey</h3>';
ul.children[0].style.background = 'green';
ul.children[1].style.background = 'yellow';
ul.children[2].style.background = 'red';

btn.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('my-form').style.background = '#ccc';
    });

    btn.addEventListener('mouseover', e => {
        e.preventDefault();
        document.querySelector('body').style.color= '#ff0000';
        });
    
        btn.addEventListener('mouseout', e => {
            e.preventDefault();
            document.querySelector('body').style.color= '#0000ff';
            });


            myForm.addEventListener('submit', onSubmit);

            function onSubmit(e) {
              e.preventDefault();
              
              if(nameInput.value === '' || emailInput.value === '') {
                msg.classList.add('error');
                msg.innerHTML = 'Please enter all fields';
                setTimeout(() => msg.remove(), 3000);
              } else {
                
            const li = document.createElement('li'); //create element of li
                 li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`)); //append text to li
                 userList.appendChild(li); //append all child to users
                 nameInput.value = '';
                 emailInput.value = '';
              }
            }