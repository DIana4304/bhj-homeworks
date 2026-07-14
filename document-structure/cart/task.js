const productQuantityControlInc = document.querySelectorAll('.product__quantity-control_inc');
const productQuantityControlDec = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');


productQuantityControlInc.forEach((inc) => {
    inc.addEventListener('click', () => {
        inc.previousElementSibling.textContent++;
    });
});

productQuantityControlDec.forEach((dec) => {
    dec.addEventListener('click', () => {
        if (dec.nextElementSibling.textContent >= 2) {
            dec.nextElementSibling.textContent--;
        }
    });
});

productAdd.forEach((e) => {
    e.addEventListener('click', () => {
        const card = e.closest('.product');

        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = card.dataset.id;
        cartProducts.appendChild(cartProduct);

        const cartProductImage = document.createElement('img');
        cartProductImage.classList.add('cart__product-image');
        const cardImg = card.querySelector('img');
        cartProductImage.src = cardImg.src;
        cartProduct.appendChild(cartProductImage);

        const cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');
        const ProductCount = card.querySelector('.product__quantity-value');
        cartProductCount.textContent = ProductCount.textContent;
        cartProduct.appendChild(cartProductCount);
    });
});