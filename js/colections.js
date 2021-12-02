document.addEventListener('DOMContentLoaded', () => {
    initColections();
});
let products_group;
let products_types;
// let cart_window;
// let cart_hide = true;

function initColections() {
    products_group = document.getElementById('products');
    // cart_window = document.getElementById('cart');
    // document.getElementById('cart_btn').addEventListener('click', () => {
    //     loadCart();
    // });
    console.log('CARGANDO PRODUCTOS');
    loadProducts('anillos');
    document.querySelectorAll('.product_type').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.product_type').forEach(element => { element.classList.remove('selected'); });
            loadProducts(element.innerHTML);
            element.classList.add('selected');
        });
    });
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = {};
        cart[name] = 1;
    } else {
        if (cart.hasOwnProperty(name)) {
            cart[name]++;
        } else {
            cart[name] = 1;
        }
    }
    if (JSON.parse(localStorage.getItem('cart_total')) === null) {
        let cart_total = {
            total: price
        };
        localStorage.setItem('cart_total', JSON.stringify(cart_total));
    } else {
        let cart_total = JSON.parse(localStorage.getItem('cart_total'));
        let price_total = +cart_total.total;
        cart_total.total = price_total + +price;
        localStorage.setItem('cart_total', JSON.stringify(cart_total));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(true);
}

function loadProducts(product_group) {
    products_group.innerHTML = '';
    let products = getProducts();
    for (let product in products[product_group]) {
        let new_product = products[product_group][product];
        products_group.innerHTML += createProduct(new_product.nombre, new_product.precio, new_product.url);
    }
}

// function loadCart(is_reload = false) {
//     // ----------show/hide----------
//     if (!is_reload) {
//         if (cart_hide) {
//             cart_window.classList.remove('hide');
//             cart_hide = false;
//         } else {
//             cart_hide = true;
//             cart_window.classList.add('hide');
//         }
//     }
//     let cart = JSON.parse(localStorage.getItem('cart'));
//     total = 0;
//     cart_window.innerHTML = '';
//     if (!(cart === null)) {
//         let names = Object.keys(cart);
//         for (let product in cart) {
//             cart_window.innerHTML += addProductToCart(product, cart[product]);
//         }
//     }
//     // añadir al final el total
//     if (!(JSON.parse(localStorage.getItem('cart_total')) === null)) {
//         total = JSON.parse(localStorage.getItem('cart_total')).total;
//     }
//     let total_text = document.createElement('h3');
//     total_text.innerHTML = `Total: ${total}€`;
//     let empty_btn = document.createElement('button');
//     empty_btn.innerHTML = `Vaciar carrito`;
//     empty_btn.addEventListener('click', () => {
//         emptyCart();
//     });
//     total_text.classList.add('total');
//     cart_window.appendChild(total_text);
//     cart_window.appendChild(empty_btn);
// }

// function emptyCart() {
//     let cart = {}
//     localStorage.setItem('cart', JSON.stringify(cart));
//     let cart_total = {
//         total: 0
//     };
//     localStorage.setItem('cart_total', JSON.stringify(cart_total));
//     loadCart(true);
// }

function createProduct(name, price, url) {
    return `<article class="w3-animate-opacity">
                <img src="${url}" alt=" ">
                <div class="product_info">
                    <div class="data">
                        <h4>${name}</h4>
                        <p>${price} €</p>
                    </div>
                    <button onclick="addToCart('${name}','${price}')">añadir</button>
                </div>
            </article>`;
}

// function addProductToCart(name, amount) {
//     return `<div class="cart_product">
//                 <p class="cart_product_name">${name}</p>
//                 <p class="cart_product_amount">x ${amount}</p>
//             </div>`;
// }


// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

function getProducts() {
    return productos;
}

let productos = {
    pulseras: [{
            nombre: "Pulsera Mía",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_076bdcd17f9c44b0bdb61f617a1f20fe~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_076bdcd17f9c44b0bdb61f617a1f20fe~mv2.webp"
        },
        {
            nombre: "Pulsera Abril",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_da7a9ef72f754c809f1837fd1baa50bc~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_da7a9ef72f754c809f1837fd1baa50bc~mv2.webp"
        },
        {
            nombre: "Pulsera Luna",
            precio: "4.00",
            url: "https://static.wixstatic.com/media/9b8ee2_593d869abcc4437c8aa6716ea83ab0bb~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_593d869abcc4437c8aa6716ea83ab0bb~mv2.webp"
        },
        {
            nombre: "Pulsera Lucero",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_41cc88be79a442999bab6d9dd43cc5b4~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_41cc88be79a442999bab6d9dd43cc5b4~mv2.webp"
        },
        {
            nombre: "Pulseras Piedras galaxy",
            precio: "3.00",
            url: "https://static.wixstatic.com/media/9b8ee2_284cdfe67ddd4d8d9d8796394de4307f~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_284cdfe67ddd4d8d9d8796394de4307f~mv2.webp"
        }
    ],
    anillos: [{
            nombre: "Anillo Galaxia",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_e0d63bef086e4b34997eb99b78b83762~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_e0d63bef086e4b34997eb99b78b83762~mv2.webp"
        },
        {
            nombre: "Anillo Galaxia",
            precio: "8.00",
            url: "https://static.wixstatic.com/media/9b8ee2_3b65f043dd23425dafaef30e179b4d5e~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_3b65f043dd23425dafaef30e179b4d5e~mv2.webp"
        },
        {
            nombre: "Anillo Turquía",
            precio: "4.50",
            url: "https://static.wixstatic.com/media/9b8ee2_b593edc4375a47e0b01699d3f2553011~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_b593edc4375a47e0b01699d3f2553011~mv2.webp"
        },
        {
            nombre: "Anillo Serpiente fina",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_5ab261770c1b442fb0809b183b9a8283~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_5ab261770c1b442fb0809b183b9a8283~mv2.webp"
        },
        {
            nombre: "Anillo Cruzada",
            precio: "5.00",
            url: "https://static.wixstatic.com/media/9b8ee2_fb994d62a9b245ef82b09f7bb2f9bb80~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_fb994d62a9b245ef82b09f7bb2f9bb80~mv2.webp"
        },
        {
            nombre: "Anillo Circle",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_f0c691881c2a49e2b63cb2fa235f3cb8~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_f0c691881c2a49e2b63cb2fa235f3cb8~mv2.webp"
        },
        {
            nombre: "Anillo Oval",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_7a131b589ad44db692ec9c378d309317~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_7a131b589ad44db692ec9c378d309317~mv2.webp"
        },
        {
            nombre: "Anillo Greta",
            precio: "5.50",
            url: "https://static.wixstatic.com/media/9b8ee2_eec7967485bb4707a24a1cdd77b5931b~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_eec7967485bb4707a24a1cdd77b5931b~mv2.webp"
        },
        {
            nombre: "Anillo Cristal fino",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_b7efee16eb3c4d04b0fc884dda38f902~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_b7efee16eb3c4d04b0fc884dda38f902~mv2.webp"
        },
        {
            nombre: "Anillo Grecia",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_1ab69b5e35d74c2caf86cfb0e12bd0c5~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_1ab69b5e35d74c2caf86cfb0e12bd0c5~mv2.webp"
        },
        {
            nombre: "Anillo Tigris",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_5cc0cba319f94ee3ac00ebe446b131f8~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_5cc0cba319f94ee3ac00ebe446b131f8~mv2.webp"
        },
        {
            nombre: "Anillo Reina ",
            precio: "5.50",
            url: "https://static.wixstatic.com/media/9b8ee2_99f5aa570e1e4f5ead951fa548045524~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_99f5aa570e1e4f5ead951fa548045524~mv2.webp"
        },
        {
            nombre: "Anillo Cristal",
            precio: "5.50",
            url: "https://static.wixstatic.com/media/9b8ee2_fa1d9b4bed914ecc8d5c7ee06bae5075~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_fa1d9b4bed914ecc8d5c7ee06bae5075~mv2.webp"
        },
        {
            nombre: "Anillo Víbora",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_85c11b64289d48d0b4a339ca8e29a9d5~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_85c11b64289d48d0b4a339ca8e29a9d5~mv2.webp"
        },
        {
            nombre: "Anillo Cuca GRANATE",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_a999f6d49ed54dabbc4d044cd357935f~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_a999f6d49ed54dabbc4d044cd357935f~mv2.webp"
        },
        {
            nombre: "Anillo Cuca NEGRO",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_59fc01a2b4fa4fedaf9cdf3f83f41c00~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_59fc01a2b4fa4fedaf9cdf3f83f41c00~mv2.webp"
        },
        {
            nombre: "Anillo Wave",
            precio: "5.50",
            url: "https://static.wixstatic.com/media/9b8ee2_17bc5e89ec86419f9e860eecf071f771~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_17bc5e89ec86419f9e860eecf071f771~mv2.webp"
        },
        {
            nombre: "Anillo Corazón",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_990d86d0412b414b8baae78aae30b045~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/9b8ee2_990d86d0412b414b8baae78aae30b045~mv2.webp"
        },
        {
            nombre: "Anillo Sirena",
            precio: "p.ecio de oferta",
            url: "https://static.wixstatic.com/media/9b8ee2_990d86d0412b414b8baae78aae30b045~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01/9b8ee2_990d86d0412b414b8baae78aae30b045~mv2.webp"
        },
        {
            nombre: "Anillos esmaltados ",
            precio: "6.00",
            url: "https://static.wixstatic.com/media/9b8ee2_389841521b794ba9b0ab9e6fadde9a96~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_389841521b794ba9b0ab9e6fadde9a96~mv2.webp"
        },
        {
            nombre: "Anillo Caracola",
            precio: "7.00",
            url: "https://static.wixstatic.com/media/9b8ee2_d95d55e6bf464108a1d3aebce0d0953d~mv2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/9b8ee2_d95d55e6bf464108a1d3aebce0d0953d~mv2.webp"
        }
    ]
}