//created an empty array to add the products
let heather = []
   
//this function creates items with name, description, price, and URL properties.
 function Autoconstructor(name,description,price,url){
     this.name = name;
     this.description = description;
     this.price = price;
     this.url = url;
}

// second item created using constructor
let item1 = new Autoconstructor('Bentley' , 'SUV' , 3760900  , "https://i.postimg.cc/Sxt7PzMV/Bentley-Mulliner-Batur-1.jpg")
let item2 = new Autoconstructor('BMW' , 'SUV' , 1961584 , "https://i.postimg.cc/3rmhJXr4/Bmw-car.jpg" ) 
let item3 = new Autoconstructor('Porshche' , 'SUV' ,193300000 , "https://i.postimg.cc/k4xJ2z3Z/porschecayenne1-ID563.png")
let item4 = new Autoconstructor('Bugatti' , 'supercar' ,263000000 , "https://i.postimg.cc/yN697mM0/Bugatti-Bolide-Hypercar-resize-1024x683.jpg" )
let item5 = new Autoconstructor('Brabus' , 'SUV' ,22353638.40   , "https://i.postimg.cc/BnStFqm0/G-wagon.jpg")
let item6 = new Autoconstructor('RollRoyce' , 'luxuryCar' ,2599000 , "https://i.postimg.cc/fb2hPs7Y/RR.jpg" )


// pushing items into array
heather.push(item1,item2,item3,item4,item5,item6)

//sets array from the local storage tp array(items) in code
//JSON.parse turns the string into an object
localStorage.setItem('heather',JSON.stringify(heather))
heather = JSON.parse(localStorage.getItem('heather'))

let table = document.querySelector('table')

function toxic(){
    
    let products = heather.map(function (items, index) {
        console.log(items)
        console.log(index)
        return `
        <tr>
        <td>${items.id}</td>
        <td>${items.name}</td>
        <td>R${items.price}</td>
        <td>${items.description}</td>
        <td><img src='${items.url}'></img></td>
        <td><button>Edit</button></td>
        <td><button class = 'delete' value = '${index}'>Del</button></td>
        </tr>
        `
    })
    
    table.innerHTML = products.join('')

}

table.style.color = 'black'
table.style.backgroundColor = 'black'
table.style.border = '5px solid black'

toxic()

function favourite(){
    localStorage.setItem('product',JSON.stringify(product))
    product = JSON.parse(localStorage.getItem('product'))
}


// deletefunction
function remove(position){
    heather.splice(position,1)
    favourite()
    toxic()
}

table.addEventListener('click', function(event){
    if(event.target.classList.contains('delete')){
        remove(event.target.value)
        // alert(event.target.value)
    }
})

let deletebutton = document.querySelector('.delete')


