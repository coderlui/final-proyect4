// ejercicio index


class Necklaces {

    constructor(nombre, precio, stock) {

      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
}

let bestSellers0 = new Necklaces ("Shell Decor Necklace", 29900, 0 );
let bestSellers1 = new Necklaces ("Pearl Necklace" , 24900, 0 ) ;
let bestSellers2 = new Necklaces ("Mixed Charm Necklace", 29900, 0 );
let bestSellers3 = new Necklaces ("3pcs Necklace" , 19900, 0 ); 

let necklaces = [bestSellers0, bestSellers1, bestSellers2, bestSellers3];


let busqueda = prompt("Cual de nuestros best sellers es tu producto favorito?");

let respuesta = necklaces
.map((element) => {
    if(element.nombre === busqueda || element.precio === busqueda ) {
        element.stock--;
    } 

    return element;
})

console.log(respuesta);

alert("Ingresaste: " + busqueda + ". Muchas gracias por tu respuesta. Te haremos saber tan pronto tengamos este producto disponible").toUpperCase();