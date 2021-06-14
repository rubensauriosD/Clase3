//VALUES

1; //number
14.5;//number
'Hola';//string
true;//bolean
false;//bolean
null;//sin valor
undefined;//no definido
[1,2,3,'hols',true];//array  -> coleccion de values, indexados en 0 a -> N
{nombre:'facu';}//objeto coleccion de valores = key -> value

//OPERADORES
1+1; // - / % ** , **=potencia

'hola ' + 'como estas'// = hola como estas

!false; //true
!true; //false

true || false //true
true && false//false

33==3;//true
33=='3';//true
3===3;//true
3==='3';//false

//TYPE
typeof 321;//number
typeof 'hola';//string
typeof true;//bool
typeof undefined// 'undefined'
typeof {edad:32}//object
typeof function(){} //function son de un subtype object

typeof null; //object
typeof [1,2,3]; //object


//VARIABLES, espaciom de memoria
var mivar = 'hola';
var num = 12341;
var arr=[1,2,3];
var text = 'largo de arr' + arr.length;

console.log(arr[2]);
console.log(text);
console.log(typeof text);
num++;
console.log(num)

//CONDICIONALES
var edad =15

if (edad > 18) {
    
    if (edad < 25) {
        console.log('podes votar, y sos joven')
        return;//con esto ya no se ejecuta lo q sigue sino q retorna 
    }
    //if (edad < 25) console.log('podes votar, y sos joven')  ESTO TIENE UN RETURN IMNPLICITO, OSEA Q SOLO HACE LO DE LA LINEA Y RETORNA
    console.log('podes votar,pero estas old')
}
else{
    console.log('no tenes edad sufic')
}


//LOOPS
var alumnos = ['yo', 'liz','tu hermana'];

for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);
}

//FOR PARA ARRAYS
for (const alumno of alumnos) {
    console.log(alumno);
}

//FOR PARA OBJEOTS
let objetophite = {a :1, b:2, v:3,};
for (const propiedad in objetophite) {
    console.log(`${propiedad}: ${objetophite[propiedad]}`)//al interpolar no puedo usar la notacion de . para llamar a la propieadd pq tira error, por eso lo llamo con la notacion de []
}

//FUNCTIONS

function nucbasaluda(nobmre) {
    console.log(`hola ${nobmre}`);
}//las function son top level scope, osea q no importa en q lugar del codigo llames a la funcion, va a andar igual, pq al debuggear el js la pc lee primero las function
nucbasaluda('ruben');

const multipliacar = (num) => {
    let x = num;

    return function (num2) {
        return x * num2;
    }
}

const multiplicarpor5 = multipliacar(5)
console.log(multiplicarpor5(6))

const multiplicarpor10 = multipliacar(10)
console.log(multiplicarpor10(6))    