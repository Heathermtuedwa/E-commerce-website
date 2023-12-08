//created an empty array to add the products
let heather = []
   
//this function creates items with name, description, price, and URL properties.
 function Autoconstructor(name,description,price,url){
     this.name = name;
     this.description = description;
     this.price = price;
     this.url = url;
}

// Adding items in the empty array
let item1 = new Autoconstructor('Bentley' , 'LUXURYCAR' , 3760900  , "https://i.postimg.cc/Sxt7PzMV/Bentley-Mulliner-Batur-1.jpg")
let item2 = new Autoconstructor('BMW' , 'SUV' , 1961584 , "https://i.postimg.cc/3rmhJXr4/Bmw-car.jpg" ) 
let item3 = new Autoconstructor('Porshche' , 'SUV' ,193300000 , "https://i.postimg.cc/k4xJ2z3Z/porschecayenne1-ID563.png")
let item4 = new Autoconstructor('Bugatti' , 'SUPERCAR' ,263000000 , "https://i.postimg.cc/yN697mM0/Bugatti-Bolide-Hypercar-resize-1024x683.jpg" )
let item5 = new Autoconstructor('Brabus' , 'SUV' ,22353638  , "https://i.postimg.cc/BnStFqm0/G-wagon.jpg")
let item6 = new Autoconstructor('RollRoyce' , 'LUXURYCAR' ,2599000 , "https://i.postimg.cc/fb2hPs7Y/RR.jpg" )

 
// pushing items into array
heather.push(item1,item2,item3,item4,item5,item6)

//sets array from the local storage tp array(items) in code
//JSON.parse turns the string into an object
localStorage.setItem('heather',JSON.stringify(heather))
heather = JSON.parse(localStorage.getItem('heather'))

//This selects the first table element in the document.
let table = document.querySelector('table')


//This function is for displaying product information.
function toxic(){
    
//displays product table rows using the array data.
    let products = heather.map(function (items, index) {
        console.log(items)
        console.log(index)
        return `
        <tr>
        <tbody>
        <td>${items.name}</td>
        <td>R ${items.price}</td>
        <td>${items.description}</td>
        <td><img src='${items.url}' height = "100px" width = "150px"></td>
        <td><button id = 'add'>Add</button></td>
        <td><button id = 'edit'>Edit</button></td>
        <td><button class = 'delete' value = '${index}'>Del</button></td>
        </tbody>
        </tr>
        `
    })
    
    //Fills the table with HTML created from the products array
    table.innerHTML = products.join('')

}

//Styling for the table
table.style.width = '100%'
table.style.color = 'white'
table.style.border = '2px solid white'
table.style.fontSize = '20px' 
//calls the function "toxic"
toxic()
//Saves and takes product data in local storage using JSON.
function favourite(){
    localStorage.setItem('heather',JSON.stringify(heather))
    product = JSON.parse(localStorage.getItem('heather'))
}


// deletefunction
function remove(position){
    heather.splice(position,1);
    favourite();
    toxic();
}
//Listens for clicks on the table; if delete button clicked, triggers the remove function.
table.addEventListener('click', function(event){
    if(event.target.classList.contains('delete')){
        remove(event.target.value);
        // alert(event.target.value)
    }
})
//Selects the first element with the class "delete" and assigns it to deletebutton.
let deletebutton = document.getElementById('Del')



   
//Adds Bootstrap classes to the table for styling, then calls the toxic function to display the data.
table.classList.add('table','table-hover', 'table-striped', 'table-bordered')
toxic();

// function addItem(){
//     document.querySelector().innerHTML 
//     `
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
    
//     `
// }




//created a function called Addproduct
function Addproduct(){
    //These lines retrieve the values entered in HTML input elements with the IDs 'firstBar' and 'secondBar'. 
    let name = document.getElementById('firstBar').value
    let description = document.getElementById('secondBar').value
    let price = document.getElementById('thirdBar').value
    let url = document.getElementById('fourthBar').value
    //It passes the product's information as arguments to the constructor.
    let createNewProduct = new Autoconstructor (name, description, price, url);
    heather.push(createNewProduct);
    //converts the updated heather array into a JSON string and stores it in the local storage under the key 'heather'.
    localStorage.setItem('heather', JSON.stringify(heather));
}

let save = document.getElementById('saveBtn');

//When 'save' is clicked, this event triggers functions,
// Addproduct(), toxic(),  favourite() .
save.addEventListener('click', function(){
    Addproduct()
    toxic();
    favourite();
})

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

// Function to hide the spinner
function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}
function removeAllData() {
    heather =[];
    // Shows the spinner before removing data
    showSpinner();

    // Hides the spinner after data is removed
    hideSpinner();
}

document.getElementById('Delete').addEventListener('click', removeAllData);
