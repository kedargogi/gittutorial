//let list=document.querySelector('ul li:nth-child(3)');
let listElem = document.getElementsByTagName("li")[2];
listElem.style.backgroundColor = "#00ff00";

//Make all the elements in the list have bold color font 
let listEle=document.getElementsByClassName("list-group-item");
//listEle[0].style.fontWeight = "bold";
//listEle[1].style.fontWeight = "bold";
//listEle[2].style.fontWeight = "bold";
//listEle[3].style.fontWeight = "bold";

for(let i=0;i<listEle.length;i++){
    listEle[i].style.fontWeight = "bold";
}

let list=document.getElementsByTagName("li");
list[4].style.backgroundColor="yellow";