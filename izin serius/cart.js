document.getElementById("total").innerText =
    "Total: Rp " + total.toLocaleString();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        let product = btn.closest(".row");

        let name = product.querySelector("h4").innerText;
        let price = product.querySelector("h3").innerText;
        let img = product.querySelector("img").getAttribute("src");

        cart.push({ name, price, img });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Produk ditambahkan ke keranjang!");
    });
});