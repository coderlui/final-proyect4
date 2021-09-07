let user__name = customer__info ("Por favor ingresa tu nombre");
let user__lastname = customer__info ("Por favor ingresa tu apellido");
let user__id = customer__info ("Ingrese su id de usuario");
let user__city = customer__info ("En que ciudad te encuentras ubicado?");
let user__address = customer__info ("Ingresa tu dirección");
let user__email = customer__info ("Ingresa tu correo electronico");
let user__comments = customer__info ("Dejanos tus comentarios");


class DatosUsuarios {

    constructor(user__name, user__lastname, user__id, user__city, user__address, user__email, user__comments) {

        this.username = user__name;
        this.userlastname = user__lastname;
        this.userid = user__id;
        this.usercity = user__city;
        this.useraddress =  user__address;
        this.useremail =user__email;
        this.usercomments = user__comments;

    }

    name_customer() {

        return "El nombre del usuario es: " + this.username + " " + this.userlastname + " y se encuentra ubicado en: " + this.usercity

    }

}

function customer__info (mensaje){
    let information = prompt (mensaje);
    return information;
}


let users = new DatosUsuarios (user__name, user__lastname, user__id, user__city, user__address, user__email, user__comments);
console.log (users); 
console.log (users.name_customer());



// ejercicios de otros desafios que debo implementar en el proyecto:

/*

// Calcular costo total de productos seleccionados por el usuario. 

let discount1 = 0.20
let productPrice = parseFloat(prompt("Cual es el valor de su producto?"));
let quantity = parseInt(prompt("Cuantas unidades desea agregar a la bolsa? 10 - 15 - 20 - 25"));
let totalBuy = productPrice * quantity 
let discount = totalBuy * discount1
let totalPrice = totalBuy - discount

if (quantity) {
    alert('Vas a comprar ' + quantity + ' unidades por valor de ' + productPrice + ' cada una. El total de tu compra será ' + totalBuy + '. Podrás redimir un 20% descuento sobre esta compra y el valor final será ' + totalPrice);
} else {
    alert('Por favor ingrese un número de los que aparecen en la pantalla');
}

// ejercicio adicional 


let product = parseFloat(prompt('Cuanto cuesta tu primer producto?'));
let productQty = parseInt(prompt('Cuantas unidades de este producto desea llevar?'));
let product1 = parseFloat(prompt('Cuanto cuesta tu segundo producto?'));
let product1Qty = parseInt(prompt('Cuantas unidades de este producto desea llevar?'));
let grandTotal = product * productQty + product1 * product1Qty; 

function costQty(product, productQty) {

    result = product * productQty;
    return result;

}

costQty (product, productQty);

function costQty2(product1, product1Qty) {

    result = product1 * product1Qty;
    return result;

}

costQty2 (product1, product1Qty);

let totalResult = (product + product1) * (productQty + product1Qty);
alert(+productQty + ' unidades de tu primer producto costarán ' + product * productQty  + '. ' + product1Qty + ' unidades de tu segundo producto costarán ' + product1 * product1Qty + '. El valor total de tu comprá será ' + grandTotal)



// desafio complementario calculo iva:

let precio = parseFloat(prompt("Cual es el valor del producto?"));
let subtotal = 0;
let total = 0;
function iva(){

    subtotal = .19*precio
    total= (subtotal + precio);
    return ("El valor total despues de aplicado el iva es: " + total);

}

alert(iva());

*/