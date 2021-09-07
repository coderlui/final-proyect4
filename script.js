 // ejercicio para la pagina de bolsos

class Bags {
    constructor(nombre, precio, coleccion) {
        this.nombre = nombre;
        this.precio = precio;
        this.coleccion = coleccion;
    }
}

let bag0 = new Bags ("BUCKLE DECOR STRAW BAG", 41900, "Verano" );
let bag1 = new Bags ("MINIMALIST TURN-LOCK BAG", 42900, "Verano");
let bag2 = new Bags ("FLORAL EMBROIDERY STRAW BAG", 43900, "Verano");
let bag3 = new Bags ("TASSEL DECOR STRAW BAG", 44900, "Verano");
let bag4 = new Bags ("TWILLY SCARF DECOR BAG", 45900, "Verano");
let bag5 = new Bags ("SHELL DECOR SATCHEL BAG", 46900, "Verano");

let bags = [bag0,bag1,bag2,bag3,bag4,bag5];

console.log(bags);

bags.push(new Bags("EMBROIDERY DECOR BAG", 47900, "Verano"));
bags.push(new Bags("ROUND HANDLE STRAW BAG", 48900, "Verano"));

let pregCliente = prompt ("Ingresa el nombre de tu producto para conocer su precio").toUpperCase();
alert("Ingresaste " + pregCliente);


while(pregCliente != "Esc"){
    switch (pregCliente) {

        case "BUCKLE DECOR STRAW BAG".toUpperCase():
            alert("El valor de este producto es $41900")
        break;

        case "MINIMALIST TURN-LOCK BAG".toUpperCase():
            alert("El valor de este producto es $42900")
        break;

        case "FLORAL EMBROIDERY STRAW BAG".toUpperCase():
            alert("El valor de este producto es $43900")
        break;

        case "TASSEL DECOR STRAW BAG".toUpperCase():
            alert("El valor de este producto es $44900")
        break;

        case "TWILLY SCARF DECOR BAG".toUpperCase():
            alert("El valor de este producto es $45900")
        break;

        case "SHELL DECOR SATCHEL BAG".toUpperCase():
            alert("El valor de este producto es $46900")
        break;

        case "EMBROIDERY DECOR BAG".toUpperCase():
            alert("El valor de este producto es $47900")
        break;

        case "ROUND HANDLE STRAW BAG".toUpperCase():
            alert("El valor de este producto es $48900")
        break;

        default:
            alert("Lo lamentamos, no encontramos el producto ingresado.")
        break;
    }
    
    let question1 = prompt("Deseas agregar este producto al carrito?").toUpperCase();

    if (false) {
        break;
    } else ("Excelente!");
    alert("El producto ha sido agregado")
    break;

}

