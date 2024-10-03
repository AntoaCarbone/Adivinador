
let numeroAleatorio= Math.floor(Math.random()*10)+1;
console.log(numeroAleatorio)

function validar(){

    let resultado=document.getElementById("resultado") //selecciono el resultado por su id y lo guardo en la variable
    numAcomparar = parseInt(document.getElementById("number").value); // tomo el num ingresado por su id y parseo xq lo que recibe del imput lo hace como string
    console.log ("el num a comparar es " +numAcomparar)

    if (numAcomparar > 0 && numAcomparar <=10){

        resultado.textContent = "El número ingresado es válido";
        resultado.style.cssText= "background-color:green"
        setTimeout(() => {
            comparar(numAcomparar)
        },2000);
        
    }
    else 
    {
        resultado.textContent="El número ingresado no es valido, debe ser entre 1 y 10 "
        resultado.style.cssText= "background-color:red"
    }

}

function comparar(numAcomparar) {
    if (numAcomparar === numeroAleatorio) {
        resultado.textContent = "¡Acertaste! Tu número es igual al número aleatorio.";
        resultado.style.cssText = "background-color:yellow; color: black;";
        document.getElementById("reiniciarJuego").style.display = "inline";
    } else if (numAcomparar < numeroAleatorio) { 
        resultado.textContent = "Intenta nuevamente, tu número es menor.";
        resultado.style.cssText = "background-color:red; color: black;";
    } else if (numAcomparar > numeroAleatorio) { 
        resultado.textContent = "Intenta nuevamente, tu número es mayor.";
        resultado.style.cssText = "background-color:red; color: black;";
    }
}

function reiniciar() {
    document.getElementById("number").value = "";

    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log("Nuevo número aleatorio generado:", numeroAleatorio); 

    resultado.textContent = "";
    resultado.style.cssText = "";

    document.getElementById("reiniciarJuego").style.display = "none";
}