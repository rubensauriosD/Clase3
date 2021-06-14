// SCOPE = EL ALCANCE DE UNA VARIABLE

// GLOBAL
let v = 'soy global';

// FUNCTION SCOPE
//LAS FUNCIONES CREAN SU PROPIO CONTEXTO DE EJECUCION - 
function fn() {
    let b = 'soy una funcion';
    console.log(b);
}
fn();

//SCOPE EN BLOQUE- esto solo lee una variable dentro del mismo bloq, osea q desde afura del scope no podes acceder a algo de adentro
{
    let c  = 'entoy en un bloq';
    console.log(c);
}

console.log(v);

// CONST  - es una variable que no puede reasignar su valor
const MI_CONST = "hola";
//MI_CONST = 'otro texto';esto te va a tirar error pq los datos primitivos no los podes reasignar

//PERO A LOS OBJETOS Y ARRAYS SI TE DEJA REASIGNAR, pq son tipo de dato referencial
const ARR = [];
ARR.push(1);


//STRING
let string1 ='hola soy stringasdasd';
let string2 ="hola soy string";
let string3 =`hola soy string`;
string3[0] ='J';//esto no va a cambiar el primer valor a j pq es una var primitiva
let string4 =`      hola soy string         `;

console.log(string1.length);
console.log(string2.toLowerCase());
console.log(string3.toUpperCase());
console.log(string4.trim());//te toma todos los espacios en blanco

//si hay 2 o mas caracteres iguales te devuelve el primero q encuenre
console.log(string1.indexOf('a'))
console.log(string1.indexOf('soy'))//este te tira el indice donde empieza la palabra
console.log(string1.indexOf('h'))
console.log(string1.indexOf('z'))//este como no esta da -1

let text = 'soy texto'
console.log(text.slice(3))//esto te devuelve lo que esta despues del indice que le pasamos, osea q en este caso no te muestra las primeras 3 letras
console.log(text.slice(3, 7))//el segundo parametro indica el fin del corte, pero te devuelve lo q esta entre ambos parametros, no es obligtorio de usar el 2do param


let fakeCSV='120,M,rojo';
let arr = fakeCSV.split(',');//con esto convierto el string en array, y cada elemento sera lo q esta separado por comas en el string
console.log(arr);

let arr2 = arr.join(',')//esto convierte el array de nuevo en string
console.log(arr2);

let change = 'mi texxtophie';
console.log(change.replace('mi','tu'))//este detecta el primer valor y luego lo reemplaza por el 2do,SI ES QUE ENCUENTRA EL 1ER VALOR

let str = "ruben"
for (const char of str) {
    console.log(char.toUpperCase().repeat(2));
}

//NUMBER 
let num = 10;
let num2 = 10.123;

console.log(Math.PI);
console.log(Math.round(num2)); //este redondea normal
console.log(Math.ceil(num2));//este redondea al mas alto
console.log(Math.floor(num2));//este redondea al mas bajo
console.log(Math.pow(5,2));//potencia de 5

//RANDOM NUMEROS
let miRandom = Math.floor(Math.random() * 10) + 1;
console.log(miRandom);



