import { headerdata, menudata, footer, bottomfooter ,bottomLink} from './compontet1.js';
import { array } from './women.js';
document.addEventListener("DOMContentLoaded", function () {
    headerdata();
    menudata();
    footer();
    bottomfooter();
    bottomLink();
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
localStorage.setItem('cart', JSON.stringify(existingCartItems));
let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
cartTotal = existingCartItemss.length;
let cart_Count=document.querySelector(".cart_count span");
cart_Count.innerHTML=cartTotal;
});


let wishlistTotal=JSON.parse(localStorage.getItem("wishlistTotal"));
let data=array;
function displayData(newArray) {
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = "";
    newArray.forEach((item) => {
        let items = document.createElement("div");
        items.innerHTML = `
            <div class="item">
                <img src="${item.img}" class="img"/>
                <p class="title-item">${item.title}</p>
                <div>
                    <p class="price">Price: Rs. ${item.price}</p>
                    <p class="rating">Rating: ${item.rating}</p>
                </div>
                <p class="add-to-wishlist"><i class="fa-regular fa-heart"></i></p>
                <button class="add-to-cart">Add To Cart</button>
            </div>`;
        itemContainer.append(items);
    });
}
displayData(data);

const buttons_categery = document.querySelectorAll(".categery");
buttons_categery.forEach((item) => {
    item.addEventListener("click", () => {
        const categery = item.innerText;
        buttons_categery.forEach(button => {
            button.classList.remove("active");
        });
        item.classList.add("active");
        if (categery !== "All") {
            categoryDisplay(categery);
        } else {
            displayData(data);
        }
    });
});


let categeryData=[];
function categoryDisplay(categery) {
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = "";
    categeryData=[];
    data.forEach((item) => {
        if (item.categery === categery || categery === "All") {
            categeryData.push(item); 
            let items = document.createElement("div");
            items.innerHTML = `
                <div class="item">
                    <img src="${item.img}" class="img"/>
                    <p class="title-item">${item.title}</p>
                    <div>
                        <p class="price">Price: Rs. ${item.price}</p>
                        <p class="rating">Rating: ${item.rating}</p>
                    </div>
                    <p class="add-to-wishlist"><i class="fa-regular fa-heart"></i></p>
                    <button class="add-to-cart">Add To Cart</button>
                </div>`;
            itemContainer.append(items);
        }
    });
}


const selectBox = document.getElementById("select-box");
selectBox.addEventListener("change", function () {
    const selectedOption = selectBox.value;
    sortData(selectedOption);
});



function sortData(option) {
    let sortedArray = [];
    let arrayToSort = categeryData.length > 0 ? categeryData : data;
    switch (option) {
        case "Price Low To High":
            sortedArray = arrayToSort.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case "Price High To Low":
            sortedArray = arrayToSort.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
        case "Rating High To Low":
            sortedArray = arrayToSort.slice().sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        case "Rating Low To High":
            sortedArray = arrayToSort.slice().sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
            break;
        default:
            sortedArray = arrayToSort;
    }
    displayData(sortedArray);
}




let AllButton = document.querySelectorAll('.add-to-wishlist');
AllButton.forEach(button => {
    button.addEventListener('click', (e) => {
        let isAuth = JSON.parse(localStorage.getItem("isAuth"));
        if (isAuth === true) {
            const productContainer = e.currentTarget.closest('.item');
            const imageSrc = productContainer.querySelector('.img').src;
            console.log(imageSrc);
            const productName = productContainer.querySelector('.title-item').innerText;
            const productPrice = productContainer.querySelector('.price').innerText;
            const product = {
                image: imageSrc,
                name: productName,
                price: productPrice
            };
            const existingCartItems = JSON.parse(localStorage.getItem('wishlist')) || [];
            const isProductInWishlist = existingCartItems.some(item => item.name === productName);
            if (isProductInWishlist) {
                alert('The product is already in your wishlist!');
            } else {
                button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
                wishlistTotal++;
                existingCartItems.push(product);
                console.log(existingCartItems);
                localStorage.setItem("wishlistTotal",JSON.stringify(wishlistTotal));
                localStorage.setItem('wishlist', JSON.stringify(existingCartItems));
                alert('Product added to Wishlist! ❤️'); 
            }
        } else {
            alert("Sign in to add to wishlist");
            window.location.href = "signup.html";
        }
    });

});

let AllcartButton = document.querySelectorAll('.add-to-cart');
AllcartButton.forEach(button => {
    button.addEventListener('click', (e) => {
        let isAuth = JSON.parse(localStorage.getItem("isAuth"));
        if (isAuth === true) {
            const productContainer = e.currentTarget.closest('.item');
            const imageSrc = productContainer.querySelector('.img').src;
            console.log(imageSrc);
            const productName = productContainer.querySelector('.title-item').innerText;
            const productPrice = productContainer.querySelector('.price').innerText;
            const product = {
                image: imageSrc,
                name: productName,
                price: productPrice
            };
            const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
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
