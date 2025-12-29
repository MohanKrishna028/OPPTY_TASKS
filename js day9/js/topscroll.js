document.addEventListener("DOMContentLoaded", function () {

    var btn = document.getElementById("scrollTopBtn");
    var sections = document.querySelectorAll("section");

    if (!btn || sections.length < 3) return;

    var thirdSection = sections[2];

    window.addEventListener("scroll", function () {

        var rect = thirdSection.getBoundingClientRect();

        // when top of 3rd section reaches viewport
        if (rect.top <= window.innerHeight * 0.8) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }

    });

    btn.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });

});