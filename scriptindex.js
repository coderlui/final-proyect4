$(document).ready(function () {

    $("h1").css("padding-top","50px");
    $("h1").css("color","#DDC3B6");
    $("h2").css("border", "1px solid #F1E3E3");
    $("h2").css("padding-top","50px");
    $("h2").css("padding-bottom","50px");
    $("#otraprueba").text("COMMING SOON");

    function desafioJquery () {    
        let stock = new Array;
        let producto_Agregado = new Array;
     
        Producto_Creado("Shell Decor Necklace", 29900, "./images/img_9389.jpg", stock);
        Producto_Creado("Pearl Necklace", 24900, "./images/IMG-0380.jpg", stock);
        Producto_Creado("Mixed Charm Necklace", 29900, "./images/IMG-0381.jpg", stock);

      
        mostrarProductos(stock, producto_Agregado)
    }
    
    class Producto { 
        constructor(nombre, precio, imgProducto) {
            this.nombre = nombre;
            this.precio = precio;
            this.imgProducto = imgProducto;
        };
    };

    class Producto_Seleccionado { 
        constructor(nombre, precio, cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
        };
    };

    function Producto_Creado(nombre, precio, imgProducto,stock){
        stock.push(new Producto(nombre, precio, imgProducto));
    };

    function modificar_Carro(nombre, precio, producto_Agregado){
        for(producto of producto_Agregado){
            if(producto.nombre == nombre) {
                producto.cantidad += 1;
                console.log(producto.cantidad)
                return producto_Agregado;
            }
        }
        producto_Agregado.push(new Producto_Seleccionado(nombre, precio, 1));
        return producto_Agregado;
    };

    function mostrarProductos(stock, producto_Agregado) {
        for (const producto of stock) {
            let desafio = document.createElement("div");
            $(desafio).attr("id", `${producto.nombre}`);
            $(desafio).html(`<img class="imagenProducto" src="${producto.imgProducto}"></img>
            <h2 class="card-title centrar">${producto.nombre}</h2>
            <h2 class="card-title centrar">${producto.precio}</h2>`);
            $(desafio).addClass("producto");
            $("#proceso").append(desafio);
            $(`[id='${producto.nombre}']`).append('<button class="botoncompra" id="luisita">Add to bag</button>');
        };
        $('.botoncompra').click(()=>{agregar_Prod(event.target.parentElement.id, stock, producto_Agregado)});
    }

    function Prod_Agregado (total){
        let confirmacion = confirm(" Gracias !!! Tu producto se a agregado al carrito");
        if (confirmacion) {
            alert("El valor total a pagar es $" + total);
        } else {
            alert("El valor total a pagar es $" + total);
        };
    };


    function agregar_Prod(nuevoProducto,stock,producto_Agregado){
        let cantidad = prompt("Cuantas unidades deseas comprar?")
        let busqueda = stock.find(producto => producto.nombre.toLowerCase().includes(nuevoProducto.toLowerCase()));
        alert("Haz elejido el producto " + busqueda.nombre + " y un total de " + cantidad + " unidades.");
        producto_Agregado = modificar_Carro(busqueda.nombre, busqueda.precio, producto_Agregado);
        let total = 0;
        for (item of producto_Agregado) {
            total += (item.precio * cantidad);
        }
        if(total) {
            Prod_Agregado(total)
        };
    };

    desafioJquery();

    $("#intentos").click(function (){
        alert("Producto: Prueba Pulsera. Valor $23900. Te interesa este producto? Dejanos tus datos en la pagina de contacto y en la seccion de comentarios escribe el nombre del producto y la cantidad que deseas. Tan pronto esté disponible en tienda fisica te lo haremos saber.")
    });

    $("#intento1").click(function (){
        alert("Producto: Prueba Aretes. Valor $21900. Te interesa este producto? Dejanos tus datos en la pagina de contacto y en la seccion de comentarios escribe el nombre del producto y la cantidad que deseas. Tan pronto esté disponible en tienda fisica te lo haremos saber.")
    });

    $("#intento2").click(function (){
        alert("Producto: Prueba Bolso. Valor $55900. Si te interesa reservar este producto, llena los datos en la pagina de formulario y te haremos saber tan pronto esté disponible")
    });


    // EFECTOS - ANIMACIONES 


    $(".col-sm-4").on("click", ()=>{

        $("#clase13").fadeOut(5000)
                     .fadeIn(1000);

    });

    setInterval(function () {
        $('h5',).fadeTo("fast" , 0.8).fadeTo("fast" , 0).delay(60).fadeTo("fast" , 1).delay(1000);
    }, 50);



});





// ejercicio index


// class Necklaces {

//     constructor(nombre, precio, stock) {

//       this.nombre = nombre;
//       this.precio = precio;
//       this.stock = stock;
//     }
// }

// let bestSellers0 = new Necklaces ("Shell Decor Necklace", 29900, 0 );
// let bestSellers1 = new Necklaces ("Pearl Necklace" , 24900, 0 ) ;
// let bestSellers2 = new Necklaces ("Mixed Charm Necklace", 29900, 0 );
// let bestSellers3 = new Necklaces ("3pcs Necklace" , 19900, 0 ); 

// let necklaces = [bestSellers0, bestSellers1, bestSellers2, bestSellers3];


// let busqueda = prompt("Cual de nuestros best sellers es tu producto favorito?");

// let respuesta = necklaces
// .map((element) => {
//     if(element.nombre === busqueda || element.precio === busqueda ) {
//         element.stock--;
//     } 

//     return element;
// })

// console.log(respuesta);

// alert("Ingresaste: " + busqueda + ". Muchas gracias por tu respuesta. Te haremos saber tan pronto tengamos este producto disponible").toUpperCase();