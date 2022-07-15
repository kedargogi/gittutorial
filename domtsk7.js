let itemList= document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#ffff00";

//childNode  it gives text node for new line
//console.log(itemList.childNodes);
//itemList.childNodes.style.backgroundColor="#f4f4f4";

//children  it only gives list item not text hence always use this
console.log(itemList.children);
itemList.children[1].style.backgroundColor="#606060"

//firstchild  It gives text node which is useless
//console.log(itemList.firstChild);

//lastchild    It gives text node which is useless
//console.log(itemList.lastChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hello";
//lastElementChild
itemList.lastElementChild.textContent="Bye";

//siblings
//console.log(itemList.nextSibling);
//console.log(itemList.previousSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//pereviousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor="lightblue";

//createElement
let newDiv= document.createElement('div');

//add class
newDiv.className="hell";

//add id
newDiv.id="yeah";
newDiv.setAttribute("title","Hello Hell");

//createTextNode
let newDivText=document.createTextNode("Hello World");
newDiv.appendChild(newDivText); //add text to div

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');

//insert before first li
let ul=document.querySelector('#items');
let liEle= document.createElement('li')
liEle.appendChild(document.createTextNode("Hello World"));
//ul.appendChild(liEle);
console.log(newDiv);

container.insertBefore(newDiv,h1);

//insert hello word before first li
ul.innerHTML='<li>Hello World</li>' + ul.innerHTML;