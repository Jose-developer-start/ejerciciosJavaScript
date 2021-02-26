var popup = document.getElementById('popup');
//Funcion encargada de hacer en Pop-up
function mouseEnterLeave(boton,ejercicio){
    boton.addEventListener('mouseenter',(event)=>{
        var enunciado = ejercicio;
        popup.style.display = 'block';
        popup.textContent = enunciado;
        boton.addEventListener('mouseleave',()=>{
            popup.style.display = 'none';
        })
        
    })
}
var ejer1 = document.getElementById('ejer1');
var enunciado = "Ejercicio 1: Solicitar al usuario un número mediante un prompt, luego muestra otro  prompt pidiendo otro número,finalmente el script muestra una alert con el  resultado de la suma. Click para ejercutar";
mouseEnterLeave(ejer1,enunciado);

var boton = document.getElementById('ejer2');
var enunciado = "Ejercicio 2: Crear un script donde el usuario ingrese en un prompt la temperatura en  Centígrados y el programa muestre en una alerta la temperatura en  Fahrenheit. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer3');
var enunciado = "Ejercicio 3:  ​A través de un prompt pedir un número a un usuario  y luego dividirlo por  10, ejemplo: 5 / 10 igual 0.5 y mostrar su resultado mediante un alert. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer4');
var enunciado = "Ejercicio 4: ​Escribir en un script la siguiente variable a = [1,2,3]; ahora crea un script  que mediante un alert indique el tipo de dato de a. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer5');
var enunciado = "Ejercicio 5: Solicitar al usuario su nombre y luego imprimir en el documento un saludo  asi:  Hola “nombre de la persona” eres bueno en JavaScript. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer6');
var enunciado = "Ejercicio 6: Crea un script que pida al usuario mediante prompt dos números y  escriba su multiplicación. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer7');
var enunciado = "Ejercicio 7: Crea un script que solicite  dos números y escriba su diferencia. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer8');
var enunciado = "Ejercicio 8: Solicitar al usuario  dos números y escriba su división. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer9');
var enunciado = "Ejercicio 9: Solicitar al usuario dos números a y b, y escriba el resultado de a​2​-b​2. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer10');
var enunciado = "Ejercicio 10: Solicitar al usuario el ancho y el alto de un rectángulo y escriba cuanto  es su perímetro (la suma de todos los lados) y su superficie (base por  altura). Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer11');
var enunciado = "Ejercicio 11:  ​Solicitar al usuario un número y extraer la raíz cuadrada, mostrar su  resultado así (Según los número siguientes 2, 8, 26, 5, 12, 244, 1200,  3200.2334 ). Click para ejercutar";
mouseEnterLeave(boton,enunciado);

//Condicionales
var boton = document.getElementById('ejer12');
var enunciado = "Ejercicio 12:   ​Determine si un número introducido en un Prompt es par o no, la respuesta será  mostrada en una alert. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer13');
var enunciado = "Ejercicio 13: ​Determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el  resultado con console.log. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer14');
var enunciado = "Ejercicio 14: ​Determinar si un número introducido en un popup es divisible por 11 y 5 o no,  mostrar el resultado con console.log. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer15');
var enunciado = "Ejercicio 15: ​Solicite al usuario dos números en un Prompt y luego muestre en un alert el número  mayor. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer16');
var enunciado = "Ejercicio 16: ​Solicite al usuario primero un números al usuario a través de un prompt y luego un  segundo número para luego mostrar en un alerta el número mayor, esta vez realizar  el ejercicio ocupando un if ternario. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer17');
var enunciado = "Ejercicio 17: Determinar si un string introducido por un usuario empieza con un número o con  una letra. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer18');
var enunciado = "Ejercicio 18: Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y  se determine si el triángulo es válido o no. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer19');
var enunciado = "Ejercicio 19:  ​Determinar si una palabra empieza con mayúscula o no. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer20');
var enunciado = "Ejercicio 20:  ​ ​Determinar si un año dado es bisiesto. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer21');
var enunciado = "Ejercicio 21: En algunos casos especiales el siguiente código tiene un error, descubrirlo y corregirlo. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

//BUCLE WHILE

var boton = document.getElementById('ejer22');
var enunciado = "Ejercicio 22: Mostrar mediante consola todos los números de 1 hasta N con  incrementos de 1 en 1 donde n lo ingresa el usuario en un prompt. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer23');
var enunciado = "Ejercicio 23: Mostrar mediante consola números de 1 a N aumentando de 2 en 2  donde N lo ingresa el usuario en un prompt. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer24');
var enunciado = "Ejercicio 24: Mostrar todos los números de N a 1 con decrementos de 1 en 1 donde  N lo ingresa el usuario en un prompt. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer25');
var enunciado = "Ejercicio 25: ​Utiliza console.log e imprime la tabla del 9 hasta 9x10. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer26');
var enunciado = "Ejercicio 26: Crea un Script que realice la suma de todos los números pares entre N  y M donde N y M los ingresa un usuario. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer27');
var enunciado = "Ejercicio 27: ​Suma los N-1 números, donde N es ingresado por el usuario. Click para ejercutar";
mouseEnterLeave(boton,enunciado);

var boton = document.getElementById('ejer28');
var enunciado = "Ejercicio 28: ​Calcular el factorial de los primeros N números, donde N es ingresado  por el usuario. Click para ejercutar";
mouseEnterLeave(boton,enunciado);