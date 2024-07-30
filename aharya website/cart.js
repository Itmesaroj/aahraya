import { headerdata, menudata, footer, bottomfooter, bottomLink } from './compontet1.js';
headerdata();
bottomLink();
footer();
bottomfooter();
let totalprice=0;
const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
localStorage.setItem('cart', JSON.stringify(existingCartItems));
let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
cartTotal = existingCartItemss.length;
let cart_Count=document.querySelector(".cart_count span");
cart_Count.innerHTML=cartTotal;


if (typeof(Storage) !== "undefined") {
    let cart = JSON.parse(localStorage.getItem("cart"));
    document.querySelector(".Number-of-item").innerHTML=`${cart.length}`;
    displayData(cart);
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}


function displayData(data){
    let products = document.querySelector(".products");
    products.innerHTML = ""; 
   
    data.forEach((item) => {
        totalprice += parseInt(item.price); 
        let product = document.createElement("div");
        product.classList.add("product");
        product.innerHTML = `
            <img src="${item.image}"/>
            <div class="product-info">
                <h3 class="product-name">${item.name}</h3>
                <h4 class="product-price">Rs. <span>${item.price}</span></h4>
                <h4 class="product-offer">40% Off</h4>
                <p class="product-quantity">Qnt: <input type="number" class="quantity" name="quantity" min="1" max="5" value="1" ></p>
                <p class="product-remove">
                    <i class="fas fa-trash"></i>
                    <span class="remove">Remove</span>
                </p>
            </div>`;
        products.appendChild(product); 

    });
    let price_total = document.querySelector(".Total-price");
    price_total.innerHTML = `Rs. ${totalprice}`;
}



document.querySelectorAll('.product-remove').forEach((button) => {
    button.addEventListener('click', (e) => {
        let product = e.target.closest('.product');
        let priceElement = product.querySelector(".product-price span");
        let removedQuantity = parseInt(product.querySelector(".quantity").value); 
        let removedPrice = parseFloat(priceElement.textContent); 
        totalprice -= removedPrice * removedQuantity; 
        let price_total = document.querySelector(".Total-price");
        price_total.innerHTML = `Rs. ${totalprice}`;
        product.remove(); 
        let data = JSON.parse(localStorage.getItem("cart"));
        let index = data.findIndex(item => item.name === product.querySelector('.product-name').textContent);
        if (index !== -1) {
            data.splice(index, 1); 
            localStorage.setItem("cart", JSON.stringify(data)); 
            let cart = JSON.parse(localStorage.getItem("cart"));
            document.querySelector(".Number-of-item").innerHTML = `${cart.length}`;
        }
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify(existingCartItems));
        let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
        const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
        cartTotal = existingCartItemss.length;
        let cart_Count=document.querySelector(".cart_count span");
        cart_Count.innerHTML=cartTotal;
        
    });
});

document.querySelectorAll(".quantity").forEach((q) => {
    q.addEventListener('change', (e) => {
        let product = e.target.closest('.product');
        let priceElement = product.querySelector(".product-price span");
        let oldQuantity = parseInt(e.target.defaultValue); 
        console.log(oldQuantity);
        let newQuantity = parseInt(e.target.value);
        let price = parseFloat(priceElement.textContent); 

        let priceDifference = price * (newQuantity - oldQuantity);
        totalprice += priceDifference;
        let price_total = document.querySelector(".Total-price");
        price_total.innerHTML = `Rs. ${totalprice}`;
        e.target.defaultValue = newQuantity;
    });
});
