// ******  select items *****
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitbtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit element

let editElment;
let editFlag = false;

// ***** Event listeners *****

// clear btn

clearBtn.addEventListener('click',clearItems)

//submit form
form.addEventListener('submit', addItem);

console.log(list)


// **** function *****

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        // create element
        const element = document.createElement('article');    // concepts to remember
        // add class
        element.classList.add('grocery-item');
        // create attribute
        let attr = document.createAttribute('data-id');  // concept to remember
        attr.value = id;
        element.setAttributeNode(attr);             // concept to remember
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`

        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        deleteBtn.addEventListener('click',deleteItem)

        // append child
        list.appendChild(element)    // concept to remember 

        // display alert

        displayAlert("Item is added", "success")

        // show container

        container.classList.add("show-container")

        // set back to default

        setBackToDefault();

      

    }
    else if (value && editFlag) {

    } else {
        displayAlert("please enter text", "danger");


    }
}

//display alert

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    }, 1000);
}

// delete function

function deleteItem(e){

   
    const element =e.currentTarget.parentElement.parentElement;
    list.removeChild(element);

    let length = list.children.length
    
    if(length === 0){
        container.classList.remove('show-container')
    }

    displayAlert('item deleted',"danger")
}

// setbacktodefault

function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitbtn.textContent = "submit";

}

// clear items 

function clearItems(){
    container.classList.remove("show-container")
    const items = document.querySelectorAll('.grocery-item')
    
 

    console.log(items)
   if(items.length>0){
       items.forEach(function(item){
            list.removeChild(item)
       })
   }

   displayAlert("empty list","danger");
   setBackToDefault()

}


