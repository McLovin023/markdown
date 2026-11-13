// igualdad debil
console.log(20 == '20'); // cuando usamos el operador de igualdad debil, el resultado es true porque el valor es igual pero el tipo es diferente
console.log(1 == true); // cuando usamos el operador de igualdad debil, el resultado es true porque el valor es igual pero el tipo es diferente
console.log(0 == false); // cuando usamos el operador de igualdad debil, el resultado es true porque el valor es igual pero el tipo es diferente
console.log('' == 0);
console.log(false !== true); // si o si se fija en el tipo de dato y el valor, si son diferentes devuelve true, si son iguales devuelve false para el caso de declarar que son diferentes

// igualdad fuerte
console.log(20 === '20'); // cuando usamos el operador de igualdad fuerte, el resultado es false porque el valor es igual pero el tipo es diferente
console.log(1 === true); // cuando usamos el operador de igualdad fuerte, el resultado es false porque el valor es igual pero el tipo es diferente
console.log(0 === false); // cuando usamos el operador de igualdad fuerte, el resultado es false porque el valor es igual pero el tipo es diferente
console.log('' === 0); // cuando usamos el operador de igualdad fuerte, el resultado es false porque el valor es igual pero el tipo es diferente
console.log(20 !== '20'); // si o si se fija en el tipo de dato y el valor, si son diferentes devuelve true, si son iguales devuelve false para el caso de declarar que son diferentes

