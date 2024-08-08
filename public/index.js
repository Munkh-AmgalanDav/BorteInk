let isOpen = false // true
let cart = [];

let product1 = {
    name: 'PMU Pen Machine',
    quantity: 1,
    img: 'machine.jpeg',
    price: '$'+ 350,
    id: 'mnkDA2HA4DK88ZQ0',
    button: 'Delete item',
}

let product2 = {
    name: 'Practice Skin',
    quantity: 1,
    img: 'practiceSkin.PNG',
    price: '$' + 5,
    id: 'mnk9OX7U6WZH9730',
    button: 'Delete item',
}
let product3 = {
    name: 'Pre-drawing Pencils',
    quantity: 1,
    img: 'pencils.jpeg',
    price: '$' + 15,
    id: 'mnkFDT8PTRZ1BQR0',
    button: 'Delete item',
}

let product4 = {
    name: 'PMU Brush',
    quantity: 1,
    img: 'browbrush.jpeg',
    price: '$' + 25,
    id: 'mnkY41LW9N0WPBH0',
    button: 'Delete item',
}


// [product1, prdouct3, product4]

function toggleMenu() {
    if (isOpen) { // true
        document.getElementById("myNav").style.width = "0%";
        isOpen = false
    } else {
        document.getElementById("myNav").style.width = "100%";
        isOpen = true
    }
}

// let product = document.getElementsByClassName('cart')
// cart.style.display = 

function addToCart(id) {
    let i = 0;
    console.log(cart)
    while (i < cart.length) {
        if (cart[i].id === id) {
            // cart[i].quantity = cart[i].quantity + 1;
            return;
        }
        i++;
    }

    if (id === product1.id) {
        cart.push(product1)
    }
    if (id === product2.id) { // 
        cart.push(product2)
    }
    if (id === product3.id) {
        cart.push(product3)
    }
    if (id === product4.id) {
        cart.push(product4)
    }
    render()
}

/*[
        {
            "name": "PMU Pen Machine",
            "img": "machine.jpeg",
            "price": "350",
            "id": "mnkDA2HA4DK88ZQ0"
        },
        {
            name: 'Practice Skin',
            img: '',
            price: '350',
            id: 'mnk9OX7U6WZH9730'
        }
    ]
    */
function render() {
    // console.log(cart) // 

    let cartOnScreen = document.querySelector('.cart-on-screen'); //
    cartOnScreen.innerHTML = '' // clean skip
    let i = 0;

    if (cart.length !== 0) {
        document.querySelector('.cart-warnings').style.display = 'none';
    } else {
        document.querySelector('.cart-warnings').style.display = 'block';
    }
    if (cart.length == 0){
        document.querySelector('.cart-footer').style.display = 'none'
    } else {
        document.querySelector('.cart-footer').style.display = 'block'
    }


    const totalQuantity = cart.reduce((sum, a) => sum + a.quantity, 0);

    console.log(totalQuantity, 'total quantity');
    let result = document.querySelector('#item-number')
    result.innerHTML = totalQuantity;



    let totalPrice = cart.reduce((sum, product) => {
        // Extract numeric part from price string and convert to number
        let numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
        return sum + (numericPrice * product.quantity);
    }, 0);
    
    console.log(totalPrice);
    let subtotal = document.querySelector('#subtotalValue')
    subtotal.innerHTML = '$' + totalPrice + ' USD';


    while (i < cart.length) { // 0 < 2

        let productCardEl = document.createElement('div'); // product card element <div></div>
        let productImgEl = document.createElement('img') // product image element <img>
        let productNameEl = document.createElement('h3') // product name element <h3></h3>
        let productPriceEl = document.createElement('p') // product price element <p></p>
        let productButtonEl = document.createElement('button')
        let productIncButton = document.createElement('button')
        let productDecButton = document.createElement('button')
        let productQuantityEl = document.createElement('span')

        productCardEl.classList.add('cart')
        productCardEl.classList.add('cart-product')
        // productButtonEl.classList.add('delButtton')
        // console.log(i)
        // console.log(event)
        let curId = cart[i].id;
        productDecButton.innerText = '-'
        productDecButton.addEventListener('click', function () {
            let s = 0;
            while (s < cart.length) {
                if (cart[s].id === curId) {
                    cart[s].quantity = cart[s].quantity - 1;

                    render();
                    return;
                }
                s++;
            }


        })


        productIncButton.innerText = "+"
        productIncButton.addEventListener('click', function () {
            let j = 0;
            //     0  <  2
            while (j < cart.length) {
                if (cart[j].id === curId) {
                    cart[j].quantity = cart[j].quantity + 1;

                    render();
                    return;
                }
                j++;
            }

        })


        productNameEl.innerText = cart[i].name;
        productPriceEl.innerText = cart[i].price
        productImgEl.src = cart[i].img
        productButtonEl.innerText = cart[i].button
        productButtonEl.id = cart[i].id
        productQuantityEl.innerText = cart[i].quantity

        productButtonEl.addEventListener("click", function (event) {
            cart = cart.filter(removeItem)
            function removeItem(product) {
                console.log(product)

                return product.id !== event.target.id

            }
            console.log(cart)
            render()

        })


        productCardEl.append(productImgEl, productNameEl, productDecButton, productQuantityEl, productIncButton, productPriceEl, productButtonEl)
        cartOnScreen.appendChild(productCardEl);
        i++;
    }

}


// render();



