let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";

function generar (){

    let numeroDigitado = parseint (cantidad.value);
    console.log (numeroDigitado);

    if (numeroDigitado < 9){
         alert("la cantidad de caracteres tiene que ser mayor que 9");
    }
    let password = "";
    for(let i=0; 1 < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres  [Math.floor (Math.random () * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    }

    contraseña.value = password;

    console.log("password generada:" + password);

    }
















