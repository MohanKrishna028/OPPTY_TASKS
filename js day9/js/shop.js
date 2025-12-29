document.addEventListener("DOMContentLoaded", function () {

    console.log("hover-cart.js loaded ✅");

    var items = document.querySelectorAll(".product-box, .accessory-item");
    console.log("Items found:", items.length);

    items.forEach(function (item) {

        var price = item.querySelector(".price");
        if (!price) return;

        var originalPrice = price.dataset.price;

        item.addEventListener("mouseenter", function () {
            price.textContent = "ADD TO CART";
        });

        item.addEventListener("mouseleave", function () {
            price.textContent = originalPrice;
        });

    });

});
