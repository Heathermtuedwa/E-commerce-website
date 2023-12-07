let buy = JSON.parse(localStorage.getItem('savannah'))

let main = document.querySelector('main')

main.innerHTML += buy.map( function(items,index) {
    return `
    <table>
        <tr>
            <td>${items.name}</td>
            <td>${items.description}</td>
            <td>R${items.price}</td>
            <img src='${items.url}' height="200px" width="200px">
            <button value ='${index}' data-add class = "btn"></button>
        </tr>
    </table>
    `
}).join('')