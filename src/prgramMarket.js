console.log("bienvenido a Marketcase");
console.log("que deseas llevar el dia de hoy");

let inventario = {
  articulos_hogar: [
    "escoba : 85",
    "trapeador : 120",
    "detergente : 75",
    "esponja : 25",
    "toallas : 160",
    "platos : 180",
    "vasos : 90",
    "cubiertos : 150",
    "sábanas : 350",
    "almohadas : 200"
  ],

  despensa: [
    "arroz : 35",
    "frijoles : 40",
    "pasta : 18",
    "harina : 28",
    "azúcar : 32",
    "sal : 15",
    "aceite : 48",
    "atún enlatado : 24",
    "sopa : 16",
    "cereal : 75",
    "avena : 38",
    "galletas : 28",
    "papas fritas : 22",
    "palomitas : 25",
    "chocolate : 30",
    "gomitas : 20",
    "cacahuates : 27",
    "barras de granola : 42"
  ],

  vegetales_y_demas: [
    "lechuga : 25",
    "tomate : 35",
    "cebolla : 30",
    "zanahoria : 22",
    "papa : 32",
    "pepino : 18",
    "brócoli : 35",
    "espinaca : 20",
    "calabacita : 28",
    "pimiento : 45",
    "manzana : 45",
    "plátano : 28",
    "naranja : 32",
    "limón : 35",
    "fresas : 55",
    "leche : 32",
    "queso : 85",
    "huevos : 55",
    "pollo : 150",
    "carne de res : 220"
  ]
};

console.log(inventario.articulos_hogar);
console.log("articulos de hogar = " + inventario.articulos_hogar.length);
console.log(inventario.despensa);
console.log("articulos de despensa = " + inventario.despensa.length);
console.log(inventario.vegetales_y_demas);
console.log("articulos de vegetales y demás = " + inventario.vegetales_y_demas.length);
console.log("total de articulos en inventario = " + (inventario.articulos_hogar.length + inventario.despensa.length + inventario.vegetales_y_demas.length));

console.log("-----------------------------------------------------");

console.log("articulos totales en tu compra =");
console.log(inventario.articulos_hogar[0]);
console.log(inventario.articulos_hogar[1]);
console.log(inventario.articulos_hogar[2]);
console.log(inventario.articulos_hogar[3]);
console.log(inventario.despensa[0]);
console.log(inventario.despensa[1]);
console.log(inventario.despensa[5]);
console.log(inventario.despensa[6]);
console.log(inventario.vegetales_y_demas[0]);
console.log(inventario.vegetales_y_demas[1]);
console.log(inventario.vegetales_y_demas[6]);
console.log(inventario.vegetales_y_demas[3]);
console.log(inventario.vegetales_y_demas[8]);

const precioEscoba = Number(inventario.articulos_hogar[0].split(":")[1].trim());
const preciotrapeador = Number(inventario.articulos_hogar[1].split(":")[1].trim());
const preciodetergente = Number(inventario.articulos_hogar[2].split(":")[1].trim());
const precioesponja = Number(inventario.articulos_hogar[3].split(":")[1].trim());

const precioarroz = Number(inventario.despensa[0].split(":")[1].trim());
const preciofrijoles = Number(inventario.despensa[1].split(":")[1].trim());
const preciopasta = Number(inventario.despensa[2].split(":")[1].trim());
const precioharina = Number(inventario.despensa[3].split(":")[1].trim());  

const preciotomate = Number(inventario.vegetales_y_demas[0].split(":")[1].trim());
const preciocebolla = Number(inventario.vegetales_y_demas[1].split(":")[1].trim());
const preciozanahoria = Number(inventario.vegetales_y_demas[6].split(":")[1].trim());
const preciopapa = Number(inventario.vegetales_y_demas[3].split(":")[1].trim());
const preciopimiento = Number(inventario.vegetales_y_demas[8].split(":")[1].trim());

const total = precioEscoba + preciotrapeador + preciodetergente + precioesponja + precioarroz + preciofrijoles + preciopasta + precioharina + preciotomate + preciocebolla + preciozanahoria + preciopapa + preciopimiento;
console.log("el total de tu compra es = " + total + " $");