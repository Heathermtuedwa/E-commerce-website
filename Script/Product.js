let savannah = []

let table = document.querySelector('table')
let things = JSON.parse(localStorage.getItem('heather'))

table.innerHTML = things.map(function (items,index){
   console.log(items)
   console.log(index);
    return `
       <table>
       <tr>
       <td>${items.name}</td>
       <td>R${items.price}</td>
       <td>${items.description}</td>
       <td><img src='${items.url}' height="70" width="80px"></td>  
       <button value ='${index}' data-add>Add to cart</button>
       </tr>
       </table>
      `
}).join('')

table.style.color= 'white'

function add(index){
    savannah.push(things[index])
    localStorage.setItem('savannah',JSON.stringify(savannah))
 }

 main.addEventListener('click',function(){
   if (event.target.hasAttribute('data-add')){
       //alert('button was pressed')
       add(event.target.value)
   }

})