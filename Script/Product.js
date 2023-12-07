//Declared an empty array
let savannah = []

//Selects the main element and takes data from local storage.
let main = document.querySelector('main')
let things = JSON.parse(localStorage.getItem('heather'))

//Fills the HTML content of the main element with data from 'things'.
main.innerHTML = things.map(function (items,index){
   console.log(items)
   console.log(index);
    return `
<div class="card">
  <div class="content">
  <img src='${items.url}' height="200px" width="200px">
   <p class="heading">${items.name}</p>
   <p class="para">${items.description}</p>
   <p class="para">R ${items.price}0</p>
   <button value ='${index}' data-add class = "btn">Add to cart</button>
   </div>
   </div>
   
`
//Converts an array into a string by joining its elements with an empty string.
}).join('')


// sets the text color of a table to white.
table.style.color= 'white'

//Adds an item from 'things' array to 'savannah' array and updates localStorage.
function add(index){
    savannah.push(things[index])
    localStorage.setItem('savannah',JSON.stringify(savannah))
 }

 //Listens for clicks in the main element. If the clicked element has a 'data-add' attribute, it calls the add function.
 main.addEventListener('click',function(){
   if (event.target.hasAttribute('data-add')){
       //alert('button was pressed')
       add(event.target.value)
   }

})

