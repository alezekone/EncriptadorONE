const textoEntrada = document.querySelector("#areaDeTextoDeEntrada");
const textoSalida = document.querySelector("#areaDeTextoDeSalida");

let clipboard = ""

function btnEncriptarClick(){
    textoSalida.value = encriptar(textoEntrada.value);
    if (textoEntrada.value.length>0) {
        document.querySelector("#imagenMuneco").setAttribute("hidden","true");
        document.querySelector(".seccion__salida__nomessage").setAttribute("hidden","true");
    }
    textoEntrada.value="";
    /* Debo ocultar la imagen del muñeco. */
}

function btnDesencriptarClick(){
    textoSalida.value = desencriptar(textoEntrada.value);
    textoEntrada.value="";
}

function btnCopiarClick(){
    clipboard = textoSalida.value;
    console.log(clipboard);
}

// Reglas de encriptación:
// "a" --> "ai"
// "e" --> "enter"
// "i" --> "imes"
// "o" --> "ober"
// "u" --> "ufat"

function encriptar(textoEntrada){
    // let equivalencias = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    textoEntrada = textoEntrada.toLowerCase();
    stringSalida = "";
    for(let i=0; i<textoEntrada.length; i++) {
        switch(textoEntrada.charAt(i)){
            case 'a':
                stringSalida = stringSalida + "ai";
                break;
            case 'e':
                stringSalida = stringSalida + "enter";
                break;
            case 'i':
                stringSalida = stringSalida + "imes";
                break;
            case 'o':
                stringSalida = stringSalida + "ober";
                break;
            case 'u':
                stringSalida = stringSalida + "ufat";
                break;
            default:
                stringSalida = stringSalida + textoEntrada.charAt(i);
        }
    }
    return (stringSalida);
}

function desencriptar(textoEncriptado){
    let equivalencias = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    for(let i=0; i<equivalencias.length;i++){
        if (textoEncriptado.includes(equivalencias[i][1])) {
            textoEncriptado = textoEncriptado.replaceAll(equivalencias[i][1], equivalencias[i][0]);
        }
    }
    return textoEncriptado;
}