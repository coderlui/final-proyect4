//DESAFIO CLASE 14 AJAX 



$(document).ready(() => {

    $("h1").css("padding-top","50px");
    $("h2").css("border", "1px solid #F1E3E3");
    $("h2").css("padding-top","50px");
    $("h2").css("padding-bottom","50px");
    $("#otraprueba").text("COMMING SOON");

    //clases
    class Producto { 
        constructor(nombre, precio, imagen) {
            this.nombre = nombre;
            this.precio = precio;
            this.imagen = imagen;
        };
    };

    //clases
    class Seleccionado { 
        constructor(nombre, precio, cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
        };
    };

    // función principal -visualización de información de las card 
    function CardVisible () {   
        let stock = new Array;
        let carrito = new Array;        
        function carroProductos(stock, carrito,) {
        const jsonLocal = "./sass/archivoJSON.json"
        $("producto_car").prepend('<div="producto_car"></div>');
        $("#producto_car").click(() => { 
        $.getJSON(jsonLocal, function ( respuesta, estado) {
            console.log('respuesta')
        if(estado === "success"){
            let misDatos = respuesta;
            for (const producto of misDatos) {
                let info = document.createElement("div");
                $(info).attr("id", `${producto.nombre}`);
                $(info).html(` <div class="card h-80">
                <img class="imagenProducto" src="${producto.imagen}"></img>
                <h2 class="card-title centrar">${producto.nombre}</h2> 
                <h2 class="card-title centrar">$${producto.precio}</h2>                            
                                    </div>`);
                $(info).addClass("producto");
                $("#producto_carro").append(info);
            stock.push (new Producto(producto.nombre,producto.precio,producto.imagen))
            }  
            $('.card-footer').on('click',()=>{agregar(event.target.parentElement.id, stock, carrito)});
            
        }    
        });
       
    });    
    
}  
    //interacción con HTML
    carroProductos(stock, carrito)
}
 CardVisible();
   
    //Función de agregado 
    function cambioCarrito(nombre, precio, carrito){
        for(producto of carrito){
            if(producto.nombre == nombre) {
                producto.cantidad += 1;
                return carrito;
            }
        }
            carrito.push(new Seleccionado(nombre, precio, 1));
            return carrito;
        };
        
    // función de agrgar Iva y confirmación 
    function confirmacion_pro (total){
        let confirmacion = confirm("¡Gracias por agregar este producto!");
        let totalIva = 0;
        if (confirmacion){
            totalIva += (total * 1.21);
            alert("El valor total a pagar con IVA es: $" + totalIva);
        }
        if (confirmacion)
        {confirm ("¿Deseas agregar otro producto?");
        }
    };

    //filtrado Productos     
    function agregar(nuevoProducto,stock,carrito){
        let busqueda = stock.find(producto => producto.nombre.toLowerCase(). includes(nuevoProducto.toLowerCase()));
        alert("Seleccionaste " + busqueda.nombre + ", ¿Desea continuar?.");
        carrito = cambioCarrito(busqueda.nombre, busqueda.precio, carrito);
        let total = 0;
        for (item of carrito) {
            total += (item.precio * item.cantidad);
        }
        if(total) {
            confirmacion_pro(total)
        }
    };
                    
        
    //Efectos y animaciones 
    
    $(".col-sm-4").on("click", ()=>{
        $("#clase13").fadeOut(5000)
                    .fadeIn(1000);
    });
    
    setInterval(function () {
        $('h5',).fadeTo("fast" , 0.8).fadeTo("fast" , 0).delay(60).fadeTo("fast" , 1).delay(1000);}, 50);
     
});

//DESAFIO CLASE 14 AJAX ----- 













//DESAFIO CLASE 13 ----- 



$(document).ready(function () {
    
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
             <h2 class="card-title centrar">$${producto.precio}</h2>`);
             $(desafio).addClass("producto");
             $("#proceso").append(desafio);
             $(`[id='${producto.nombre}']`).append('<button class="botoncompra">Add to bag</button>');
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

 });

//DESAFIO CLASE 13 ----- 
