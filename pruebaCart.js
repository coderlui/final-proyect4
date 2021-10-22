
function cartStorage() {



    function cartProducts(productName, productPrice){

        this.pName = productName,
        this.pPrice = productPrice
    }

    let cartProductname_Storage = document.getElementById("pruebita").value;
    let cartProductprice_Storage = document.getElementById("pruebis").value;

    cartInformation = new cartProducts (cartProductname_Storage, cartProductprice_Storage);
    console.log(cartInformation);
    addTo_Cart ();
    cartLocal_Storage();

    function addTo_Cart (){
        let productsAdded = [];
        localStorage.setItem("productsAdded", JSON.stringify (cartInformation));
        productsAdded.push(cartInformation);
        console.log(productsAdded);
    
    }
    
    //Guardar datos en el LocalStorage
    
    function  cartLocal_Storage() {
    
        if (JSON.parse(localStorage.getItem(cartInformation))){
            
            let cartInformation = JSON.parse(localStorage.getItem(cartInformation));
    
        } else {
    
            console.log("Sin datos")
    
        }
    
    
    }
    
    let botton = document.getElementsById("pfinal")
    botton.addEventListener("submit", productsInCart);
    
    function productsInCart (e) {
        e.preventDefault();

        if (cartProductname_Storage && cartProductprice_Storage ){
            console.log(productsInCart);
        }
    
    }
    
    cartStorage();



}












// let contenedor= document.createElement("p")
// contenedor.innerHTML = '<p>Share the love</p>';

// let registro= document.getElementById ('registro');
// registro.appendChild(contenedor);


// let boton = document.getElementById("form")
// boton.addEventListener("submit",  respuestaFinal);


// function respuestaFinal (e){
//     e.preventDefault();
//     let ingresar = false;
//     let validarEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        
//         if (nombrealmacenamiento.value.length <2){
//            alert ("Por favor ingresa tu nombre correctamente.")
//             ingresar= true
//         }
//         if (!validarEmail.test(correoalmanenamiento.value)){
//            alert ("El email ingresado no es valido")
//             ingresar= true
            
//         }
//         if (comentariosalmacenamiento.value.length <6){
//             alert ("Por favor escribe tus comentarios")
//             ingresar= true
//         } 

                
//     almacenamiento();
    
//     let gracias = document.createElement("div");
  
//     gracias.innerHTML = `<h4>Datos almacenados correctamente</h4>`;
  
//     contenedor.appendChild(gracias);
  
//     setTimeout(() => {   

//       gracias.remove();
  
//     }, 3000); 
  
//   } ;

 
