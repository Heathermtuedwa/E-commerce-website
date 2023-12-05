function saveEcommerceWebsiteToLocalStorage() {
    localStorage.setItem('E-commerce', JSON.stringify(todoList));
  }
  
  function getEcommerceFromLocalStorage() {
    const storedEcommerce = localStorage.getItem('todoList');
    return storedEcommerce ? JSON.parse(storedEcommerce) : [];
  }

function searchItems() {
    let input = document.getElementById('searchInput').value.toLowerCase();
 

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortItems(order) {
    const items = document.querySelectorAll('#itemList li');
    const sortedItems = Array.from(items).sort((a, b) => {
        const priceA = extractPrice(a.textContent);
        const priceB = extractPrice(b.textContent);

        if (order === 'Price') {
            return priceB - priceA; // It sorts it from the highest to lowest
        }
    });

    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    sortedItems.forEach(item => {
        itemList.appendChild(item);
    });
}


function searchProduct() {
    // Array of  products
    let products = ['1', '2', '3'];
    let searchItems = document.getElementById('searchInput').value;

    // Check if the user input is in the array of products
    if (products.includes(searchItems)) {
        alert(searchItems + ' found!');
    } else {
        alert(searchItems + ' not found.');
    }
}
var products = ['Laptop', 'Smartphone', 'Tablet', 'Camera', 'Headphones'];

// Display initial list of products
displayProducts(products);

function searchProduct() {
    var userInput = document.getElementById('searchBar').value.toLowerCase();
    var filteredProducts = products.filter(function(product) {
        return product.toLowerCase().includes(userInput);
    });
    displayProducts(filteredProducts);
}

function sortProducts() {
    var sortedProducts = products.slice().sort();
    displayProducts(sortedProducts);
}

function displayProducts(productArray) {
    var productListElement = document.getElementById('productList');
    // Clear previous list
    productListElement.innerHTML = '';

    // Display the products in an unordered list
    productArray.forEach(function(product) {
        var listItem = document.createElement('li');
        listItem.textContent = product;
        productListElement.appendChild(listItem);
    });
}

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}  

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}


