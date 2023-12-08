let buy = JSON.parse(localStorage.getItem('savannah'))

let main = document.querySelector('main')

main.innerHTML += buy.map( function(items,index) {
    return `
    <table >
        <tr>
            <td>${items.name}</td>
            <td>${items.description}</td>
            <td>R${items.price}</td>
            <img src ='${items.url}' height="200px" width="200px">
            <button value ='${index}' data-add class = "btn">Remove</button>
        </tr>
    </table>
    `
}).join('')

function removeItem(index) {
    items.splice(index, 1); // Remove the item from the array
    itemTable.deleteRow(index + 1); // Remove the corresponding row in the table
  }


function purchased() {
    alert("purchased successfully!");
  }