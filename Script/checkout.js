let buy = JSON.parse(localStorage.getItem('savannah'))

let main = document.querySelector('main')
let table = document.querySelector('#checkoutTable')

table.innerHTML = buy.map( function(items,index) {
    return `
        <tr>
            <td id="tdStyle" style = "color: black; background-color: blue; padding-top: 40px">${items.name}</td>
            <td id="tdStyle" style = "color: black; background-color: grey; padding-top: 40px">${items.description}</td>
            <td id="tdStyle" style = "color: black; background-color: blue; padding-top: 40px" >R${items.price}</td>
           <td id="tdStyle" style = "color:  black; background-color: grey; padding-top: 40px" ><img src='${items.url}' height="200px" width="200px"></td> 
           <td id="tdStyle" style = "color:  black; background-color: blue; padding-top: 40px"><button id="removeButton" value='${index}' data-add class="btn">Remove</button>
        </tr>
    `
}).join('')

    //"Function triggers purchase actions, it a  button for making purchases."
    function makePurchase() {
        
        //"Confirmation prompt asks user to confirm or cancel a purchase."
        let confirmPurchase = confirm("Do you want to make a purchase?");
        
       //If confirmed, show 'Purchase successful!', otherwise show 'Purchase canceled'. 
        if (confirmPurchase) {
          
          alert("Purchase successful!"); 
        } else {
         
          alert("Purchase canceled.");
        }
      }

      let removeButton = document.getElementById('removeButton');
      removeButton.addEventListener('click', function() {   
          favourite(); 
      });
  