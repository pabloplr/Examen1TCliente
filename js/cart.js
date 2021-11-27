document.addEventListener('DOMContentLoaded', () => {
    initCart();
});

let cart_window;
let cart_hide = true;

function initCart() {
    cart_window = document.getElementById('cart');
    document.getElementById('cart_btn').addEventListener('click', () => {
        loadCart();
    });
}


function loadCart(is_reload = false) {
    // ----------show/hide----------
    if (!is_reload) {
        if (cart_hide) {
            cart_window.classList.remove('hide');
            cart_hide = false;
        } else {
            cart_hide = true;
            cart_window.classList.add('hide');
        }
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    total = 0;
    cart_window.innerHTML = '';
    if (!(cart === null)) {
        let names = Object.keys(cart);
        for (let product in cart) {
            cart_window.innerHTML += addProductToCart(product, cart[product]);
        }
    }
    // añadir al final el total
    if (!(JSON.parse(localStorage.getItem('cart_total')) === null)) {
        total = JSON.parse(localStorage.getItem('cart_total')).total;
    }
    let total_text = document.createElement('h3');
    total_text.innerHTML = `Total: ${total}€`;
    let empty_btn = document.createElement('button');
    empty_btn.innerHTML = `Vaciar carrito`;
    empty_btn.addEventListener('click', () => {
        emptyCart();
    });
    total_text.classList.add('total');
    cart_window.appendChild(total_text);
    cart_window.appendChild(empty_btn);
}

function emptyCart() {
    let cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
    let cart_total = {
        total: 0
    };
    localStorage.setItem('cart_total', JSON.stringify(cart_total));
    loadCart(true);
}

function addProductToCart(name, amount) {
    return `<div class="cart_product">
                <p class="cart_product_name">${name}</p>
                <p class="cart_product_amount">x ${amount}</p>
            </div>`;
}