import { headerdata,menudata ,footer,bottomfooter} from '../compontet1.js';
headerdata();
menudata();
footer();
bottomfooter();
const allHoverImages = document.querySelectorAll('.hoverable_image div img');
const imgContainer = document.querySelector('.main_images');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

function resetActiveImg() {
    allHoverImages.forEach((image) => {
        image.parentElement.classList.remove('active');
       
    });
}

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.currentSrc;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});
