// header data

function headerdata(){
    let headerdata=document.createElement("div");
    headerdata.className="header_data";
    headerdata.innerHTML=`<div class="top_header_section">
    <ul class="social_link">
        <li>
            <a href="#" class="social-link"><i class="fa-brands fa-facebook"></i></a>
        </li>
        <li>
            <a href="#" class="social-link"><i class="fa-brands fa-twitter"></i></a>
        </li>

        <li>
            <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
        </li>

        <li>
            <a href="#" class="social-link"><i class="fa-brands fa-linkedin"></i></a>
        </li>
    </ul>
    <div class="header-alert-news">
        <p>
          <b>Free Shipping</b>
          This Week Order Over - $55
        </p>
    </div>
    <div class="header-top-actions">
        <select name="currency" class="select_box">
          <option value="usd">USD &dollar;</option>
          <option value="eur">EUR &euro;</option>
        </select>
        <select name="language" class="select_box">
          <option value="en-US">English</option>
          <option value="es-ES">Espa&ntilde;ol</option>
          <option value="fr">Fran&ccedil;ais</option>
        </select>
      </div>
</div>
<div class="bottom_header_section">
    <div class="logo">
        <h3 class="logo__title"><a href="home.html">aharya fashion</a></h3>
    </div>
    
    <div class="search">
        <input type="text" id="serach_input" placeholder="Enter your product name......">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="shooping_sec">
        <div class="user">
            <a href="profile.html"><i class="fa-regular fa-user"></i></a>
        </div>
        <div class="fav_sec">
        <a href="wishlistpage.html" target="_blank"><i class="fa-regular fa-heart"></i></a>
        </div>
        <div class="cart_sec">
        <a href="cart.html" target="_blank"><i class="fa-solid fa-cart-shopping"></i></a>
            <div class="cart_count"><span>0</span></div>
        </div> 
    </div>
</div>`
document.querySelector("header").append(headerdata);
}

// website menu
function menudata(){
    document.querySelector(".menu_section").innerHTML=`  <ul class="menu_list">
    <li ><a href="home.html">HOME</a></li>
    <li><a href="women.html">Women</a></li>
    <li><a href="">Men</a></li>
    <li><a href="">Beauty</a></li>
    <li><a href="">Kids</a></li>
    <li><a href="">Sale</a></li>
</ul>`
}
// footer 
function footer(){
    document.querySelector("#footer-section").innerHTML=` <div class="footer-category">
    <div class="footer-container">
        <h2 class="footer-category-title">Brand directory</h2>
        <div class="footer-category-box">
            <h3 class="category-box-title">Fashion :</h3>
            <a href="#" class="footer-category-link">T-shirt</a>
            <a href="#" class="footer-category-link">Shirts</a>
            <a href="#" class="footer-category-link">shorts & jeans</a>
            <a href="#" class="footer-category-link">jacket</a>
            <a href="#" class="footer-category-link">dress & frock</a>
            <a href="#" class="footer-category-link">innerwear</a>
            <a href="#" class="footer-category-link">hosiery</a>
        </div>
        <div class="footer-category-box">
            <h3 class="category-box-title">footwear :</h3>
            <a href="#" class="footer-category-link">sport</a>
            <a href="#" class="footer-category-link">formal</a>
            <a href="#" class="footer-category-link">Boots</a>
            <a href="#" class="footer-category-link">casual</a>
            <a href="#" class="footer-category-link">cowboy shoes</a>
            <a href="#" class="footer-category-link">safety shoes</a>
            <a href="#" class="footer-category-link">Party wear shoes</a>
            <a href="#" class="footer-category-link">Branded</a>
            <a href="#" class="footer-category-link">Firstcopy</a>
            <a href="#" class="footer-category-link">Long shoes</a>
        </div>
        <div class="footer-category-box">
            <h3 class="category-box-title">jewellery :</h3>
            <a href="#" class="footer-category-link">Necklace</a>
            <a href="#" class="footer-category-link">Earrings</a>
            <a href="#" class="footer-category-link">Couple rings</a>
            <a href="#" class="footer-category-link">Pendants</a>
            <a href="#" class="footer-category-link">Crystal</a>
            <a href="#" class="footer-category-link">Bangles</a>
            <a href="#" class="footer-category-link">bracelets</a>
            <a href="#" class="footer-category-link">nosepin</a>
            <a href="#" class="footer-category-link">chain</a>
            <a href="#" class="footer-category-link">Earrings</a>
            <a href="#" class="footer-category-link">Couple rings</a>
        </div>
        <div class="footer-category-box">
            <h3 class="category-box-title">cosmetics :</h3>
            <a href="#" class="footer-category-link">Shampoo</a>
            <a href="#" class="footer-category-link">Bodywash</a>
            <a href="#" class="footer-category-link">Facewash</a>
            <a href="#" class="footer-category-link">makeup kit</a>
            <a href="#" class="footer-category-link">liner</a>
            <a href="#" class="footer-category-link">lipstick</a>
            <a href="#" class="footer-category-link">prefume</a>
            <a href="#" class="footer-category-link">Body soap</a>
            <a href="#" class="footer-category-link">scrub</a>
            <a href="#" class="footer-category-link">hair gel</a>
            <a href="#" class="footer-category-link">hair colors</a>
            <a href="#" class="footer-category-link">hair dye</a>
            <a href="#" class="footer-category-link">sunscreen</a>
            <a href="#" class="footer-category-link">skin loson</a>
            <a href="#" class="footer-category-link">liner</a>
            <a href="#" class="footer-category-link">lipstick</a>
        </div>
    </div>
</div>
<div class="footer-links-nav">
    <div class="footer-box">
        <h2 class="item_title">POPULAR CATEGORIES</h2>
        <ul>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Kids</a></li> 
            <li><a href="#">Cosmetic</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
        </ul>
    </div>
    <div class="footer-box">
        <h2 class="item_title">PRODUCTS</h2>
        <ul>
            <li><a href="#">Prices Drop</a></li>
            <li><a href="#">New Products</a></li> 
            <li><a href="#">Best Sales</a></li>
            <li><a href="#">Contact Us
            </a></li>
            <li><a href="#">Sitemap</a></li>
        </ul>
    </div>
    
    <div class="footer-box">
        <h2 class="item_title">OUR COMPANY</h2>
        <ul>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Legal Notice</a></li> 
            <li><a href="#">Terms And Conditions</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Secure Payment</a></li>
        </ul>
    </div>
    <div class="footer-box">
        <h2 class="item_title">SERVICES</h2>
        <ul>
            <li><a href="#">Prices Drop</a></li>
            <li><a href="#">New Products</a></li> 
            <li><a href="#">Best Sales</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sitemap</a></li>
        </ul>
    </div>
    <div class="footer-box">
        <h2 class="item_title">CONTACT</h2>
        <ul>
            <li><i class="fa-solid fa-location-dot"></i> <a href="#">419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</a></li>
            <li><i class="fa-solid fa-phone"></i>   <a href="#">(607) 936-8058</a></li> 
            <li><i class="fa-solid fa-envelope"></i>  <a href="#">Example@Gmail.Com</a></li>
        </ul>
    </div>
</div>`
}
function bottomLink(){
    let bottom_bar=document.querySelector(".bottom_bar");

    bottom_bar.innerHTML=`
    <div class="shooping_sec_bottom">
        <div class="user">
            <a href=""><i class="fa-regular fa-user"></i></a>
        </div>
        <div class="fav_sec">
        <a href="" target="_blank"><i class="fa-regular fa-heart"></i></a>
        </div>
        <div class="cart_sec">
        <a href="" target="_blank"><i class="fa-solid fa-cart-shopping"></i></a>
            <div class="cart_count"><span>0</span></div>
        </div> 
    </div>
    `
    document.body.append(bottom_bar)
}
function bottomfooter(){
    document.querySelector(".bottom-footer").innerHTML=`<div class="card-image">
    <span><img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/payment.png" alt=""></span>
    
</div>
<p>Copyright © Anon All Rights Reserved.</p>`
}

export {headerdata ,menudata, footer,bottomfooter,bottomLink};
