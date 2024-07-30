import { headerdata,menudata ,footer,bottomfooter,bottomLink} from './compontet1.js';
bottomLink();
headerdata();
menudata();
footer();
var cartTotal=0; 
bottomfooter();
let wishlistTotal=JSON.parse(localStorage.getItem("wishlistTotal"));
document.addEventListener('DOMContentLoaded', function() {
  let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
  const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartTotal = existingCartItems.length;
  console.log(cartTotal);
 let cart_Count=document.querySelector(".cart_count span");
 cart_Count.innerHTML=cartTotal;
});

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 7){
    counter = 1;
  }
}, 4000);

let user = JSON.parse(localStorage.getItem("isAuth"));

if (user) {
    document.querySelector(".user a").href = "profile.html";
} else {
    document.querySelector(".user a").href = "signup.html";
}

document.querySelector(".user").addEventListener("mouseover",()=>{
  let drop=document.querySelector(".sign_in_drop_dwon");
  change(drop);
})
function change(anything){
  anything.style.display="block";
  anything.addEventListener("mouseout",()=>{
      changeback(anything);
  });
}
function changeback(item){
  item.style.display="none";
}

// trending product
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

document.querySelector(".wishlist").addEventListener("click",()=>{
    let heart=document.querySelector(".wishlist");
    function addwishlist(){
      let heart=document.querySelector(".wishlist");
      heart.innerHTML=`<i class="fa-solid fa-heart"></i>`;
    }
})

// new product 
document.addEventListener('DOMContentLoaded', function() {
  const productContainerssect = [...document.querySelectorAll('.products-container')];
  const nxtBtnnew = [...document.querySelectorAll('.pre-btn_new')];
  const preBtnnew = [...document.querySelectorAll('.nxt-btn_new')];
  if (productContainerssect.length !== nxtBtnnew.length || productContainerssect.length !== preBtnnew.length) {
      console.error('Number of containers does not match the number of buttons.');
      return;
  }
  productContainerssect.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtnnew[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
      });

      preBtnnew[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
      });
  });
});
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});



document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.cart');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        let isAuth = JSON.parse(localStorage.getItem("isAuth"));
        if(isAuth===true){
          const productContainer = event.target.closest('.preview');
          const imageSrc = productContainer.querySelector('img').src;
          const productName = productContainer.querySelector('h3').innerText;
          const productPrice = productContainer.querySelector('.price .a-2').innerText;
          const product = {
              image: imageSrc,
              name: productName,
              price: productPrice
          };
          const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
          existingCartItems.push(product);
          localStorage.setItem('cart', JSON.stringify(existingCartItems));
          let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
            const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
            cartTotal = existingCartItemss.length;
          let cart_Count=document.querySelector(".cart_count span");
          cart_Count.innerHTML=cartTotal;
          alert('Product added to cart! 🛒');
        }
        else{
          alert("sign_in_for add to cart");
          window.location.href="signup.html";
        }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.buy');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        let isAuth = JSON.parse(localStorage.getItem("isAuth"));
        if(isAuth===true){
          const productContainer = event.target.closest('.preview');
          const imageSrc = productContainer.querySelector('img').src;
          const productName = productContainer.querySelector('h3').innerText;
          const productPrice = productContainer.querySelector('.price .a-2').innerText;
          const product = {
              image: imageSrc,
              name: productName,
              price: productPrice
          };
          const existingCartItems = JSON.parse(localStorage.getItem('wishlist')) || [];
          existingCartItems.push(product);
          let totalwishlistcount = JSON.parse(localStorage.getItem("wishlistTotal"));
          totalwishlistcount=existingCartItems.length;
          localStorage.setItem('wishlist', JSON.stringify(existingCartItems));
          localStorage.setItem("wishlistTotal",JSON.stringify(totalwishlistcount));
          alert('Product added to Wishlist! ❤️');
        }
        else{
          alert("sign_in_for add to wishlist");
          window.location.href="signup.html";
        }
      });
  });
});

const addToCartButtons = document.querySelectorAll('.add-wishlist-btn');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); 
        let isAuth=JSON.parse(localStorage.getItem("isAuth"));
        if(isAuth===true){
          const productContainer = event.target.closest('.product-card');
          const imageSrc = productContainer.querySelector('.product-thumb').src;
          const productName = productContainer.querySelector('.product-brand').innerText;
          const productPrice = productContainer.querySelector('.price .a-2').innerText;
          const product = {
              image: imageSrc,
              name: productName,
              price: productPrice
          };
          const existingCartItems = JSON.parse(localStorage.getItem('wishlist')) || [];
          existingCartItems.push(product);
          let totalwishlistcount = JSON.parse(localStorage.getItem("wishlistTotal"));
          totalwishlistcount=existingCartItems.length;
          localStorage.setItem("wishlistTotal",JSON.stringify(totalwishlistcount));
          localStorage.setItem('wishlist', JSON.stringify(existingCartItems));
          alert('Product added to Wishlist!❤️');
        }
        else{
          alert("sign_in_for add to wishlist");
          window.location.href="signup.html";
        }
      });
  });

  const addToCartButtonss = document.querySelectorAll('.add-cart-btn');
  addToCartButtonss.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); 
        let isAuth = JSON.parse(localStorage.getItem("isAuth"));
        if(isAuth===true){
          const productContainer = event.target.closest('.product-card');
          const imageSrc = productContainer.querySelector('.product-thumb').src;
          const productName = productContainer.querySelector('.product-brand').innerText;
          const productPrice = productContainer.querySelector('.price .a-2').innerText;
          const product = {
              image: imageSrc,
              name: productName,
              price: productPrice
          };
          const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
          existingCartItems.push(product);
          localStorage.setItem('cartTotal',JSON.stringify(cartTotal));
          localStorage.setItem('cart', JSON.stringify(existingCartItems));
          let cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
            const existingCartItemss = JSON.parse(localStorage.getItem('cart')) || [];
            cartTotal = existingCartItemss.length;
            console.log(cartTotal);
          let cart_Count=document.querySelector(".cart_count span");
          cart_Count.innerHTML=cartTotal;
          alert('Product added to cart 🛒!');
        }
        else{
            alert("sign_in_for add to cart");
            window.location.href="signup.html";
          }
      });
  });

