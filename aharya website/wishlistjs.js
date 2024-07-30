import { headerdata, menudata, footer, bottomfooter, bottomLink } from './compontet1.js';
headerdata();
bottomLink();
footer();
bottomfooter();

const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
localStorage.setItem('cart', JSON.stringify(existingCartItems));
let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
cartTotal = existingCartItemss.length;
let cart_Count=document.querySelector(".cart_count span");
cart_Count.innerHTML=cartTotal;

if (typeof(Storage) !== "undefined") {
    let data = JSON.parse(localStorage.getItem("wishlist"));
    let cart= JSON.parse(localStorage.getItem("cart"));
    let totalwishlistcount = JSON.parse(localStorage.getItem("wishlistTotal"));
    let totalwishlist = document.querySelector(".wishList-item-total span");
    totalwishlist.innerHTML = `${totalwishlistcount}`;
    
    displayData(data);
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}



function displayData(data) {
    let product_wishlist = document.querySelector(".product-wishlist");
    product_wishlist.innerHTML = "";
    data.forEach((item) => {
        let items = document.createElement("div");
        items.classList.add("item");
        items.innerHTML = `
            <img src="${item.image}" class="img"/>
            <p class="title-item">${item.name}</p>
            <div>
                <p class="price">Rs. <span>${item.price}</span></p>
            </div>
            <button class="remove-btn">Remove <i class="fas fa-trash"></i></button>
            <button class="add-to-cart">Add To Cart</button>`;
        product_wishlist.append(items);
    });
}



document.querySelectorAll('.remove-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        removeItem(index);
    });
});



function removeItem(index) {
    console.log(index);
    let data = JSON.parse(localStorage.getItem("wishlist"));
    data.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(data));
    let totalwishlistcount = data.length;
    localStorage.setItem("wishlistTotal", JSON.stringify(totalwishlistcount)); // Corrected this line
    let totalwishlist = document.querySelector(".wishList-item-total span");
    totalwishlist.innerHTML = `${totalwishlistcount}`;
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify(existingCartItems));
    let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
    const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
    cartTotal = existingCartItemss.length;
    let cart_Count=document.querySelector(".cart_count span");
    cart_Count.innerHTML=cartTotal;
    
    displayData(data);
}  


document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', (e) => {
        let isAuth = JSON.parse(localStorage.getItem("isAuth"));
        if (isAuth === true) {
            const productContainer = e.currentTarget.closest('.item');
            const imageSrc = productContainer.querySelector('.img').src;
            console.log(imageSrc);
            const productName = productContainer.querySelector('.title-item').innerText;
            const productPrice = productContainer.querySelector('.price span').innerText;
            const product = {
                image: imageSrc,
                name: productName,
                price: productPrice
            };
           
            const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartTotal=existingCartItems.length;
        
            const isProductInWishlist = existingCartItems.some(item => item.name === productName);
            if (isProductInWishlist) {
                alert('The product is already in your Cart!');
            } else {
                const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
                existingCartItems.push(product);
                localStorage.setItem('cart', JSON.stringify(existingCartItems));
                let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
                const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
                cartTotal = existingCartItemss.length;
                let cart_Count=document.querySelector(".cart_count span");
                cart_Count.innerHTML=cartTotal;
                alert('Product added to Cart! ❤️');
            }
        } else {
            alert("Sign in to add to wishlist");
            window.location.href = "signup.html";
        }
    });
});
