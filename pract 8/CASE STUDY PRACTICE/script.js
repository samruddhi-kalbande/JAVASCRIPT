const products = [
    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499
    },
    {
        name: "Smart Watch",
        category: "Electronics",
        price: 1999
    },
    {
        name: "Cotton T-Shirt",
        category: "Clothing",
        price: 499
    },
    {
        name: "Denim Jacket",
        category: "Clothing",
        price: 1299
    },
    {
        name: "JavaScript Guide",
        category: "Books",
        price: 699
    },
    {
        name: "HTML Book",
        category: "Books",
        price: 599
    },
    {
        name: "Backpack",
        category: "Accessories",
        price: 899
    },
    {
        name: "Sunglasses",
        category: "Accessories",
        price: 399
    }
];

const searchBox = document.getElementById("searchBox");
const category = document.getElementById("category");
const searchForm = document.getElementById("searchForm");
const clearBtn = document.getElementById("clearBtn");
const productList = document.getElementById("productList");
const errorMessage = document.getElementById("errorMessage");

function displayProducts(productArray) {
    productList.innerHTML = "";

    if (productArray.length === 0) {
        productList.innerHTML = "<p>No products found</p>";
        return;
    }

    productArray.forEach(function(product) {
        const productDiv = document.createElement("div");

        productDiv.className = "product";

        productDiv.innerHTML =
            "<h3>" + product.name + "</h3>" +
            "<p>Category: " + product.category + "</p>" +
            "<p class='price'>&#8377; " + product.price + "</p>";

        productList.appendChild(productDiv);
    });
}

function validateSearch() {
    const searchText = searchBox.value;
    const pattern = /^[A-Za-z ]*$/;

    if (!pattern.test(searchText)) {
        errorMessage.innerHTML =
            "Error: Only letters and spaces are allowed.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}

function filterProducts() {
    if (validateSearch() === false) {
        return;
    }

    const searchText = searchBox.value.toLowerCase();
    const selectedCategory = category.value;

    const filteredProducts = products.filter(function(product) {
        const productName = product.name.toLowerCase();

        const nameMatch = productName.includes(searchText);

        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return nameMatch && categoryMatch;
    });

    displayProducts(filteredProducts);
}

function clearFilters() {
    searchBox.value = "";
    category.value = "All";
    errorMessage.innerHTML = "";
    displayProducts(products);
}

searchBox.addEventListener("input", function() {
    validateSearch();
    filterProducts();
});

category.addEventListener("change", function() {
    filterProducts();
});

clearBtn.addEventListener("click", function() {
    clearFilters();
});

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    filterProducts();
});

displayProducts(products);