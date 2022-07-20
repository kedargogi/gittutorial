let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//alert("hey dom");


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var adddes = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(adddes));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button')

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right delete';


  // Append text node
  deleteBtn.appendChild(document.createTextNode('X')); //delete button
  editBtn.appendChild(document.createTextNode('+')); //edit button

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;

    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
     
    } else {
      item.style.display = 'none';
      
    }
  });
  Array.from(items).forEach(function(description){
    var itemName2 = description.firstChild.textContent;

    if(itemName2.toLowerCase().indexOf(text) != -1){
      description.style.display = 'block';
     
    } else {
      description.style.display = 'none';
      
    }
  });
}
