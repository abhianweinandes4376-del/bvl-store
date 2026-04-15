// HEADER STICKY
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// TUNGGU DOM SIAP
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".add-cart").forEach(btn => {
        btn.addEventListener("click", () => {

            // 🔥 AMBIL SATU CARD PRODUK
            let product = btn.closest(".row");

            let name = product.querySelector("h4").innerText;
            let price = product.querySelector("h3").innerText;
            let img = product.querySelector("img").src;

            cart.push({ name, price, img });

            localStorage.setItem("cart", JSON.stringify(cart));

            // 🔥 PAKAI TOAST BUKAN ALERT
            showToast("Produk ditambahkan ke keranjang 🛒");
        });
    });

});


// TOAST NOTIFICATION
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) return; // biar gak error kalau belum ada

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
function updateCartCount() {
    let count = cart.length;
    document.querySelector(".bx-cart").setAttribute("data-count", count);
}

// RATING SYSTEM
document.querySelectorAll(".ratting").forEach((ratingBox, index) => {

    let stars = ratingBox.querySelectorAll("i");

    // load dari localStorage
    let savedRating = localStorage.getItem("rating_" + index);

    if(savedRating){
        setRating(stars, savedRating);
    }

    stars.forEach(star => {
        star.addEventListener("click", () => {

            let value = star.getAttribute("data-value");

            setRating(stars, value);

            // simpan
            localStorage.setItem("rating_" + index, value);
        });
    });
});

// function set warna bintang
function setRating(stars, value){
    stars.forEach(star => {
        if(star.getAttribute("data-value") <= value){
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

// SCROLL ANIMATION
const fadeEls = document.querySelectorAll(".row");

window.addEventListener("scroll", () => {
    fadeEls.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            el.classList.add("show");
        }
    });
});