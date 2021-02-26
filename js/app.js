/*Var*/
var mostra = document.getElementById('res');
function ejercicio1(){
    /*
    Solicitar al usuario un número mediante un prompt, luego muestra otro  prompt pidiendo otro número,
    finalmente el script muestra una alert con el  resultado de la suma. 
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   var suma = numero1 + numero2;
   alert('La suma es: ' + suma);
}
function ejercicio2(){
    /*
    Crear un script donde el usuario ingrese en un prompt 
    la temperatura en  Centígrados y el programa muestre en una alerta la temperatura en  Fahrenheit. 
    */
   const centigrados = Number(prompt("Ingrese temperatura en Centigrados: "));
   const conversionFahrenheit = (centigrados * 9/5) + 32;
   alert('La temperatura en  Fahrenheit es: ' + conversionFahrenheit);
}
function ejercicio3(){
    /*
    A través de un prompt pedir un número a un usuario  y luego dividirlo por  10,
        ejemplo: 5 / 10 igual 0.5 y mostrar su resultado mediante un alert. 
    */
   const numero = Number(prompt("Ingrese un numero: "));
   var operacion = numero / 10;
   alert(`La división de ${numero} entre 10 es: ` + operacion);
}
function ejercicio4(){
    /*
    Escribir en un script la siguiente variable a = [1,2,3]; 
    ahora crea un script  que mediante un alert indique el tipo de dato de  a. 
    */
   const numeros = [1,2,3];
   alert(`La variable "numero = [${numeros}]" es de tipo : ` + typeof(numeros));
}
function ejercicio5(){
    /*
    Solicitar al usuario su nombre y luego imprimir en el documento un saludo  asi: 
     Hola “nombre de la persona” eres bueno en JavaScript
    */
   const nombre = String(prompt('Ingresa tú nombre: '));
   mostra.style.display = 'block';
   mostra.textContent = `Hola ${nombre} eres bueno en JavaScript`;
   setTimeout(()=>{
       mostra.style.display = 'none'
   },4000);
}
function ejercicio6(){
    /*
    Crea un script que pida al usuario mediante prompt dos números y  escriba su multiplicación 
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   var multiplicacion = numero1 * numero2;
   alert('La multiplicación es: ' + multiplicacion);
}
function ejercicio7(){
    /*
    ​Crea un script que solicite  dos números y escriba su diferencia
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   var diferencia = numero1 - numero2;
   alert(`La diferencia entre ${numero1} y ${numero2} es: ` + diferencia);
}
function ejercicio8(){
    /*
    ​Solicitar al usuario  dos números y escriba su división
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   var division = numero1 / numero2;
   alert(`La division entre ${numero1} y ${numero2} es: ` + division);
}
function ejercicio9(){
    /*
     ​Solicitar al usuario dos números a y b, y escriba el resultado de a​2​-b​2
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   var operacion = Math.pow(numero1,2) - Math.pow(numero2,2);
   alert(`El resultado de ${numero1}^2 - ${numero2}^2 es: ` + operacion);

}
function ejercicio10(){
    /*
    Solicitar al usuario el ancho y el alto de un rectángulo y escriba cuanto  es su perímetro
     (la suma de todos los lados) y su superficie (base por  altura) 

    */
   mostra.style.display = 'block';
   const ancho = Number(prompt("Digita el ancho de un rectángulo: "));
   const alto = Number(prompt("Digita el alto de un rectángulo: "));
   var perimetro = 2 * (ancho + alto);
   var superficie = ancho * alto;
   
   alert(`El perimetro es: ${perimetro} y su superficie es: ${superficie}`);   
}
function ejercicio11(){
    /*
     ​Solicitar al usuario un número y extraer la raíz cuadrada, mostrar su  resultado así
      (Según los número siguientes 2, 8, 26, 5, 12, 244, 1200,  3200.2334 ): 

    */
   const numero = Number(prompt("Digita un número: "));
   const raiz = Math.sqrt(numero);
   alert(`La raiz cuadrada de ${numero} es: ${raiz}`); 
}
/*
*Estructuras condicionales
*
*/
function ejercicio12(){
    /*
    ​Determine si un número introducido en un Prompt es par o no,
       la respuesta será  mostrada en una alert 
    */
   const numero = Number(prompt("Digita un número: "));
   if(numero % 2 === 0){
        alert('Es un numero par')
   }else{
        alert('Es impar')
   }
}
function ejercicio13(){
    /*
    Determine si un número introducido en un Prompt es divisible por 5 o no,
     mostrar el  resultado con console.log 
    */
   const numero = Number(prompt("Digita un número: "));
   if(numero % 5 === 0){
        let operacion = numero / 5;     
        console.log(`El numero ${numero} es divisible por 5, el resultado es: ${operacion}`)
   }else{
        console.log('No es divisible')
   }
}
function ejercicio14(){
    /*
    Determinar si un número introducido en un popup es divisible por 11 y 5 o no,
    mostrar el resultado con console.log  
    */
   const numero = Number(prompt("Digita un número: "));
   if((numero % 5 === 0) && (numero % 11 === 0)){
    console.log(`El numero ${numero} es divisible por 5 y 11`)
   }else{
        console.log('No es divisible')
   }
}
function ejercicio15(){
    /*
     Solicite al usuario dos números en un Prompt y luego muestre en un alert el número  mayor.
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   if(numero1 > numero2){
        alert('El número mayor es: ' + numero1);
   }else if(numero1 < numero2){
        alert('El número mayor es: ' + numero2);
   }else{
       alert('Los números iguales');
   }
}
function ejercicio16(){
    /*
    Solicite al usuario primero un números al usuario a través de un prompt y luego un  segundo número 
    para luego mostrar en un alerta el número mayor,
      esta vez realizar  el ejercicio ocupando un if ternario. 
    */
   const numero1 = Number(prompt("Digita un numero: "));
   const numero2 = Number(prompt("Digita otro numero: "));
   var resultado = (numero1 > numero2) ? 'El número mayor es: '+ numero1 : (numero2 > numero1) ? 'El número mayor es: '+numero2 : 'Los número son iguales';
   alert(resultado);
}
function ejercicio17(){
    /*
    Determinar si un string introducido por un usuario empieza con un número o con  una letra. 
    */
   const palabra = prompt("Digita una palabra: ");
   const expresionLetra = /[A-Z]/i;
   const expresionNumber = /[0-9]/;
   if(palabra.charAt() == palabra.match(expresionLetra)){
       alert('Empieza con una letra');
   }else if(palabra.charAt() == palabra.match(expresionNumber)){
        alert('Empieza con un número');
   }else{
       alert('Empieza con una número');
   }

}
function ejercicio18(){
    /*
    ​Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y 
      se determine si el triángulo es válido o no. 
 
    */
   const anguloUno = prompt("Ingrese el primer ángulo: ");
   const anguloDos = prompt("Ingrese el segundo ángulo: ");
   const anguloTres = prompt("Ingrese el tercer ángulo: ");
   var suma = parseInt(anguloUno) + parseInt(anguloDos) + parseInt(anguloTres);
   if(suma === 180){
        alert('El triángulo es válido');
   }else{
        alert('El triángulo no es válido');
   }

}
function ejercicio19(){
    /*
    Determinar si una palabra empieza con mayúscula o no.
    */
   const cadena = String(prompt("Digita una palabra: "));
   var expresion = /[A-Z]/g;
   if(cadena.charAt() == cadena.match(expresion)){
    console.log('La primera empieza con Mayúscula');
}else{
    console.log('La palabra no empieza con mayúscula');
}

}
function ejercicio20(){
    /*
    Determinar si un año dado es bisiesto 
    */
   const year = prompt("Digita un año: ");
   if(year % 4 == 0){
       alert('Es un año bisiesto');
   }else{
    alert('No es un año bisiesto');
   }

}
function ejercicio21(){
    /*
    ​En algunos casos especiales el siguiente código tiene un error, descubrirlo y corregirlo
    //Obtener edad 
    */
   const edad = Number(prompt("Digita una edad: "));
   if(edad < 13){
        console.log('Es niño');
   }else if(edad < 18){
        console.log('Es adolecente');
   }else{
        console.log('Es adolecente');
   }

}
/*
 *@Estructuras: LOOP o BUCLES 
 * 
*/
function ejercicio22(){
    /*
    ​Mostrar mediante consola todos los números de 1 hasta N con  incrementos de 1 en 1 donde n lo ingresa el usuario en un prompt. 
    */
   const numero = Number(prompt("Digita un número: "));
   var contador = 1;
   while(contador <= numero){
       console.log("Número: " + contador)
       contador +=1;
   }

}
function ejercicio23(){
    /*
    Mostrar mediante consola números de 1 a N aumentando de 2 en 2  donde N lo ingresa el usuario en un prompt. 
    */
   const numero = Number(prompt("Digita un número: "));
   var contador = 1;
   while(contador <= numero){
       console.log("Número: " + contador)
       contador +=2;
   }

}
function ejercicio24(){
    /*
    Mostrar todos los números de N a 1 con decrementos de 1 en 1 donde  N lo ingresa el usuario en un prompt. 
    */
   var numero = Number(prompt("Digita un número: "));
   while(numero >= 1){
       console.log("Número: " + numero)
       numero -=1;
   }

}
function ejercicio25(){
    /*
    ​Utiliza console.log e imprime la tabla del 9 hasta 9x10 
    */
   var tablaMultiplicar = 9;
   var contador = 1;
   const rango = 10;
   let operacion = 0;
   while(rango >= contador){
        operacion = tablaMultiplicar * contador;
        console.log(`${tablaMultiplicar} x ${contador} = ${operacion}`);
        contador +=1;
   }

}
function ejercicio26(){
    /*
    Crea un Script que realice la suma de todos los números pares
     entre N  y M donde N y M los ingresa un usuario. 
    */
   var numeroN = Number(prompt('Ingrese un número: '));
   var numeroM = Number(prompt('Ingrese otro número: '));
   var suma = 0;
   while(numeroN > 0 || numeroM > 0){
       if((numeroN % 2 == 0) && (numeroM % 2 == 0)){
           suma += numeroN + numeroM;
           
       }
       numeroM -=1;
       numeroN -=1;
   }
   console.log(suma);

}
function ejercicio27(){
    /*
    Suma los N-1 números, donde N es ingresado por el usuario. 
    */
   var numero = Number(prompt('Ingrese un número: '));
   var suma = 0;
   while (numero > 0){
       suma += numero - 1;
       console.log('La suma es de: '+suma);
       numero -=1;  
    }
}
//Factorial atraves de recursividad o bucle
function ejercicio28(){
    /*
    Calcular el factorial de los primeros N números, donde N es ingresado  por el usuario 
    */
   var numero = Number(prompt('Ingrese un número: '));
   var contador = 1;
   var factorial = 1;
   while(contador <= numero){
        factorial *=contador;
        console.log(`Factorial de ${contador} es ${factorial}`);
        contador +=1;
   }

}