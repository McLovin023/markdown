var nombre1 = "simon";
let apellido = "parra";
const apellido2 = "garcia";

var nombre1 = "andres";
apellido = "hernandez";

console.log(apellido);

//arays de 10 elementos

let artiiculos_oficina = ["lapiz","escritorio","computador","silla", "esfero","bote de basura","archivos","correspondencia","piza papeles","grapadora","perforadora"];
console.log(artiiculos_oficina[0]);
console.log(artiiculos_oficina[3]);

//metodos eliminar agregar

//agrgar inicio
artiiculos_oficina.unshift("sobres");
artiiculos_oficina.unshift("clips");
console.log(artiiculos_oficina);

//agregar final
artiiculos_oficina.push("tijeras");
artiiculos_oficina.push("aromatizante");

//eliminar el primero
artiiculos_oficina.shift();

//eliminar el ultimo 
artiiculos_oficina.pop();

//eliminar posicion especifica
artiiculos_oficina.splice(5,2);


//objetos


let oficina = {
    nombre: "Oficina Central",

    departamento: {
        departamento_a_cargo: "Administracion",

        empleado: {
            nombre: "Simon",
            cargo: "Auxiliar administrativo"
        },

        articulos: [
            "Lapiz",
            "Cuaderno",
            "Borrador",
            "Regla",
            "Marcador"
        ]
    }
};

console.log(oficina);
console.log(oficina.departamento.articulos.length + " total articulos")


//metodo include en strings

let nombre = "Simon Andres";

console.log(nombre.includes("Simon")  + " si esta Simon en la linea ");

// metodo falso

console.log(nombre.includes("Carlos"));

//usando if y else


let mensaje = "Hola, bienvenido a CSS";

if (mensaje.includes("JavaScript")) {
    console.log("La palabra sí existe");
} else {
    console.log("La palabra no existe");
}

// tambien funciona con letras 

let palabra = "computador";

console.log(palabra.includes("puta"));
console.log(palabra.includes("com"));
console.log(palabra.includes("z"));

//distingue mayusculas y minisculas

let texto = "Hola Mundo";

console.log(texto.includes("Hola")); // true
console.log(texto.includes("hola")); // false

//ignorar mayusculas

let texto1= "Hola Mundo";

console.log(texto1.toLowerCase().includes("hola"));


//metodos de string

//startWith
const archivo = "informe.pdf"

const empiezaCorrectamente = archivo.startsWith("informe");

const esPdf = archivo.endsWith(".pdf")

console.log("¿empieza con informe?", empiezaCorrectamente);
console.log( "termina en .pdf", esPdf);

//metodo trim
let nombre3
