var imgs = document.querySelectorAll(".slider img"); // Fixed typo 'documemt'
var dots = document.querySelectorAll(".dot");
var currentimg = 0;
const interval = 3000;

function changeSlider(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0; 
        dots[i].className = dots[i].className.replace(' active', ''); 
    }
    currentimg = n;
    imgs[currentimg].style.opacity = 1; 
    dots[currentimg].className += ' active'; 
}

var timer = setInterval(function() {
    changeSlider((currentimg + 1) % imgs.length);
}, interval);

function changeSliderManually(n) {
    clearInterval(timer); 
    changeSlider(n); 
    timer = setInterval(function() {
        changeSlider((currentimg + 1) % imgs.length);
    }, interval); 
}