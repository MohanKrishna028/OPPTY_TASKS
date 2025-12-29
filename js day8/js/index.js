document.addEventListener("DOMContentLoaded", function () {

    var scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) {
        console.log("Scroll button not found");
        return;
    }

    window.onscroll = function () {

        if (document.documentElement.scrollTop > 700 || document.body.scrollTop > 700) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    scrollBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

});


var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var current = 0;

function showSlide(index) {
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
    
}