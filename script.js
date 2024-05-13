/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase*/

function contarLetra (frase, letra){

    for(let i=0; i<frase.length; i++){
        let contador=0;
        if(frase[i]===letra){
            contador++
        }
    }
    return contador;
}

console.log(contarLetra("Esta es la frase en la que quiero contar las aes", "a"));

/*Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números*/
let numeroUsuario = prompt("Ingresa un numero: ");
let array =[];
for(let i = numeroUsuario; i<=numeroUsuario+50; i++){
    if(i%2!==0){
        array.push(i)
    }
}