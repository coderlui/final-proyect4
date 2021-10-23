
function shoppingCart() {

    //Clase boton carro
    const productToShoppingCart = document.querySelectorAll( '.botonCarro' ); 
    productToShoppingCart.forEach( ( ACTButtons ) => {
        ACTButtons.addEventListener( 'click', AtcBtnClick )
    });
    
    function AtcBtnClick( event ) {
        let btn = event.target;
        const ejsProducts = btn.closest( '.card' );
        

        //obtener informacion del producto
        const pdtImg = ejsProducts.querySelector( '.card-img-top' ).src;
        const pdtTitle = ejsProducts.querySelector( '.card-title' ).textContent;
        const prdPrice = ejsProducts.querySelector( '.card-price' ).textContent;
        
        modalCart( pdtImg, pdtTitle, prdPrice );
        cartCounterUpdate();
    };    
    
    const displayCart = document.querySelector( '.show-cart' );
    function modalCart( pdtImg, pdtTitle, prdPrice ) {
        
        //evitar que se dupliquen productos
        let ejsProductsTitleRepeat = displayCart.getElementsByClassName( 'shoppingCartPdtTitle' );
        
        for( let i = 0; i < ejsProductsTitleRepeat.length; i++ ) {
            if( ejsProductsTitleRepeat[i].innerHTML === pdtTitle ) {
                let ejsProductsTitleQuantity = ejsProductsTitleRepeat[i].parentElement.parentElement.querySelector( '.shoppingCartPdtQuantity' );
                ejsProductsTitleQuantity.value++;
                cartTotalPrice();
               
                
                return;
            }
        };

        hhhhh();


        function hhhhh () {
            let shoppingC = [];
            localStorage.setItem("shoppingC", JSON.stringify (pdtTitle, prdPrice));
            shoppingC.push(pdtTitle, prdPrice);
            console.log(shoppingC);
        }
        
        
        const shoppingCartDiv = document.createElement( 'div' );
        const cartVisible =
        `
            <div class="row shoppingCartProdc mt-3 text-center">
                <div class="col-3">
                    <img src=${pdtImg} class="imagenesModal"/>
                    <h6 class="mt-2 shoppingCartPdtTitle">${pdtTitle}</h6>
                </div> 
                
                <div class="col-3">
                    <p class="card-price shoppingCartProductPrice">${prdPrice}</p>
                </div>
                
                <div class="col-3">
                    <input class="text-center shoppingCartPdtQuantity inputCuenta" type="number" value="1">
                </div>
                  
                <div class="col-3">
                    <button class="btn btn-outline" id="remove-product-btn" data-name="${pdtTitle}">  x </button>
                </div>
            </div>
        `
        
        shoppingCartDiv.innerHTML = cartVisible;
        displayCart.append( shoppingCartDiv );
        
        // boton remover productos
        
        const removeButton = shoppingCartDiv.querySelector( '#remove-product-btn' );
        
        removeButton.addEventListener( 'click', deleteProductsInCart );
        
        //cantidades 
        const inputCartQuantity = shoppingCartDiv.querySelector( '.shoppingCartPdtQuantity' );
        
        inputCartQuantity.addEventListener( 'change', cartQuantityChange );
        
        cartTotalPrice();
    };

    // contador 
    
    function cartCounterUpdate() {
        
        const cartProductsLength = document.querySelectorAll( '.shoppingCartProdc' );
        const cartCounter = document.querySelector( '#cart-counter' );
        cartCounter.innerHTML = cartProductsLength.length;
        cartTotalPrice();
    };  
    
    // precio total
    
    function cartTotalPrice() {
        var totalCount = 0;
        const totalPrice = document.querySelector( '.total-price' );
        const shoppingCartProducts = document.querySelectorAll( '.shoppingCartProdc' );
        
        shoppingCartProducts.forEach( ( shoppingCartProdc ) => {
            const pdtCartQtyEPriceElement = shoppingCartProdc.querySelector( '.shoppingCartProductPrice' );
            const pCartPrice = Number( pdtCartQtyEPriceElement.textContent.replace( '$', '' ) );
            
            const pdtCartQtyElement = shoppingCartProdc.querySelector( '.shoppingCartPdtQuantity' );
            const productInCartQuantity = Number( pdtCartQtyElement.value );
            
            totalCount += pCartPrice * productInCartQuantity;
        });
        
        totalPrice.innerHTML = `$${totalCount.toFixed(2)}`;
    };
    
    // eliminar productos del carro
    
    function deleteProductsInCart(event) {
        const removeBtnClicked = event.target;
        removeBtnClicked.closest( '.shoppingCartProdc' ).remove();
        cartTotalPrice();
        cartCounterUpdate();
    };
            
    // qty de las unidades en el carrito
    
    function cartQuantityChange(event) {
        const inputCartChange = event.target;
        inputCartChange.value <= 0 ? ( inputCartChange.value = 1 ) : null;
        cartTotalPrice();
        cartCounterUpdate();
    };

    // Finalizar compra
    
    const checkoutButton = document.querySelector( '.btn-finalizar-compra' );
    
    checkoutButton.addEventListener('click', finalizarCompraTotal);
    
    function finalizarCompraTotal() {
        displayCart.innerHTML = '';
        cartTotalPrice();
        cartCounterUpdate();
    };

    // Eliminar todos los productos del carro
    
    const removeCartElements = document.querySelector( '.btn-vaciar-carrito' );
    
    removeCartElements.addEventListener('click', removePdtsCart);
    
    function removePdtsCart() {
        displayCart.innerHTML = '';
        cartTotalPrice();
        cartCounterUpdate();
    };


};
    
    shoppingCart();


        