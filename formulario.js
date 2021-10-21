
function almacenamiento() {


        function Persona(nombre, apellido,direccion,correo_electronico,comentarios,){
            this.nombre = nombre;
            this.apellido = apellido;
            this.direccion = direccion;
            this.correo_electronico = correo_electronico;
            this.comentarios = comentarios;
            this.form =form;
            this.parrafo = parrafo;
        }
    
        let nombrealmacenamiento = document.getElementById('nombrealmacenamiento').value;
        let apellidoalmacenamiento = document.getElementById("apellidoalmacenamiento").value;
        let domicilioalmanenamiento = document.getElementById("domicilioalmanenamiento").value;
        let correoalmanenamiento = document.getElementById("correoalmanenamiento").value;
        let comentariosalmacenamiento = document.getElementById("comentariosalmacenamiento").value;
        let form = document.getElementById("form");
        let parrafo = document.getElementById ("mensaje");
        

        nuevoUsuario = new Persona (nombrealmacenamiento, apellidoalmacenamiento, domicilioalmanenamiento, correoalmanenamiento, comentariosalmacenamiento );
        console.log (nuevoUsuario);
        agregar();   
        guardar_local();
        
    }
 
    
    function agregar (){
        let baseUsuarios = [];    
        localStorage.setItem ("baseUsuarios", JSON.stringify (nuevoUsuario));
        baseUsuarios.push(nuevoUsuario);
        console.log(baseUsuarios);
    }
    
    //Guardar datos en el LocalStorage
    
    function guardar_local (){
     
        if (JSON.parse(localStorage.getItem(nuevoUsuario))){
    
            let nuevoUsuario = JSON.parse(localStorage.getItem(nuevoUsuario));
            
         }else{
             console.log("No hay datos almacenados")
         }
    }
    



    let contenedor= document.createElement("p")
    contenedor.innerHTML = '<p>Share the love</p>';
    
    let registro= document.getElementById ('registro');
    registro.appendChild(contenedor);
    
    
    let boton = document.getElementById("form")
    boton.addEventListener("submit",  respuestaFinal);
    
    
    function respuestaFinal (e){
        e.preventDefault();
        let ingresar = false;
        let validarEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
            
            if (nombrealmacenamiento.value.length <2){
               alert ("Por favor ingresa tu nombre correctamente.")
                ingresar= true
            }
            if (!validarEmail.test(correoalmanenamiento.value)){
               alert ("El email ingresado no es valido")
                ingresar= true
                
            }
            if (comentariosalmacenamiento.value.length <6){
                alert ("Por favor escribe tus comentarios")
                ingresar= true
            } 
    
                    
        almacenamiento();
        
        let gracias = document.createElement("div");
      
        gracias.innerHTML = `<h4>Datos almacenados correctamente</h4>`;
      
        contenedor.appendChild(gracias);
      
        setTimeout(() => {   
    
          gracias.remove();
      
        }, 3000); 
      
      } ;
