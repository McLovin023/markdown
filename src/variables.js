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

//eliminar posicion espedifica
artiiculos_oficina.splice(5,1);


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

