let suma = '5'+ 5; // cuando sumamos un string con un numero, el resultado es un string concatenado
console.log(typeof suma, suma);

let resta = '5' - 5; // cuando restamos un string con un numero, el resultado es un numero
console.log(typeof resta, resta);

let multiplicacion = '5' * 5; // cuando multiplicamos un string con un numero, el resultado es un numero
console.log(typeof multiplicacion, multiplicacion);

let division = '5' / 5; // cuando dividimos un string con un numero, el resultado es un numero
console.log(typeof division, division);

//conversion de string a numero
let transform = Number(suma); // cuando convertimos un string a numero, el resultado es un numero
console.log(typeof transform, transform);

//conversioin de numero a string
const transform2 = String(suma); // cuando convertimos un numero a string, el resultado es un string
console.log(typeof transform2, transform2);

//numeros flotantes
const numeroPI = 3.1415926535;
const metodoToFixed = numeroPI.toFixed(2); // cuando usamos el metodo toFixed, el resultado es un string con el numero redondeado a 2 decimales
console.log(typeof metodoToFixed, metodoToFixed);

//conversion de string a numero flotante con parseint y parsefloat
const numeroflotanteparseado = parseFloat(numeroPI);
console.log(typeof numeroflotanteparseado, numeroflotanteparseado);

const numeroflotanteparseado2 = parseInt(numeroPI); // cuando usamos el metodo parseInt, el resultado es un numero entero
console.log(typeof numeroflotanteparseado2, numeroflotanteparseado2);

