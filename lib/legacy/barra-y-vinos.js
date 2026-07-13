// RESPALDO — no se importa en ninguna parte del sitio.
//
// Estas secciones estuvieron publicadas en /menu hasta el 12-07-2026. Se
// retiraron porque la carta nueva que entregó el local (CARTA TALTAL PIZZA.pdf)
// no incluye barra ni vinos. Se conservan aquí por si hay que reponerlas:
// basta con volver a importarlas en app/menu/page.js y agregarlas a SECTIONS.
//
// Los precios son los que estaban vigentes antes de esa fecha y NO fueron
// confirmados contra la carta nueva. Verificar antes de republicar.

export const CERVEZAS = [
  { name: "Corona", price: "$3.000" },
  { name: "Royal", price: "$3.000" },
  { name: "Heineken", price: "$3.000" },
  { name: "Sol", price: "$3.000" },
  { name: "Budweiser", price: "$3.000" },
  { name: "Kunstmann Torobayo", price: "$3.800" },
  { name: "Kunstmann Layer", price: "$3.800" },
  { name: "Austral Layer", price: "$3.800" },
  { name: "Austral Calafate", price: "$3.800" },
  { name: "Austral Torres del Paine", price: "$3.800" },
  { name: "Austral Variedades", price: "$3.800" },
  { name: "Shop Heineken 500cc", price: "$4.500" },
  { name: "Shop Kunstmann 500cc /1000cc", price: "$5.500" },
  { name: "Shop Stella Artois 500cc/ 1000cc", price: "$5.000" },
  { name: "Stella", price: "$3.000" },
  { name: "Chelada / Michelada", price: "$1.300" },
  { name: "Gran Torobayo 500cc", price: "$4.800" }
];

export const CERVEZA_SIN_ALCOHOL = [
  { name: "Kunstmann Lager", price: "$3.000" },
  { name: "Heineken", price: "$3.000" },
  { name: "Variedades", price: "$3.000" }
];

export const CLASICOS = [
  {
    name: "Piña Colada",
    price: "$6.000",
    image: "/menu/cocteles/clasicos/pinacolada.png"
  },
  {
    name: "Pisco Sour",
    price: "$5.000",
    image: "/menu/cocteles/clasicos/piscosour.png"
  },
  { name: "Catedral", price: "$8.500" },
  { name: "Mango Sour", price: "$6.000" },
  { name: "Maracuya Sour", price: "$6.000" },
  { name: "Tequila Margarita", price: "$5.500" },
  { name: "Tequila Blue", price: "$5.500" },
  { name: "Amaretto Sour", price: "$6.500" },
  { name: "Primavera", price: "$5.000" },
  { name: "Martini Seco", price: "$6.000" },
  { name: "Tom Colins", price: "$5.500" },
  { name: "Aperol Spritz", price: "$7.000" },
  { name: "Vaina", price: "$6.000" },
  { name: "Baileys", price: "$6.300" },
  { name: "Clavo Oxidado", price: "$8.000" },
  { name: "Daiquiri", price: "$5.500" },
  { name: "Caipirinha", price: "$5.500" },
  { name: "Caipiroska", price: "$6.000" },
  { name: "Ramazotti Spritz", price: "$7.000" },
  { name: "Ramazotti Violeto", price: "$7.000" },
  { name: "Ramazotti Maracuya", price: "$7.000" },
  { name: "Old Fashioned", price: "$6.000" },
  { name: "Pink Collins", price: "$8.000" },
  { name: "Moscow Mule", price: "$7.000" },
  { name: "Tequila Sunrise", price: "$5.500" },
  { name: "Sangria Copa", price: "$7.000" },
  { name: "Gin de Verano", price: "$8.000" },
  { name: "Jaggermeister", price: "$4.000" },
  { name: "Whisky Sour", price: "$8.000" },
  { name: "Ruso Blanco", price: "$6.000" }
];

export const MOJITOS = [
  { name: "Clasico", price: "$5.500" },
  { name: "Sabores", price: "$6.500" },
  { name: "Black", price: "$6.500" },
  { name: "Corona", price: "$8.000" },
  { name: "Mojito Piña Colada", price: "$6.500" },
  { name: "Mojito Ramazotti", price: "$7.500" },
  { name: "Bulldog", price: "$7.000" },
  { name: "Honey", price: "$8.000" },
  { name: "Apple", price: "$8.000" },
  { name: "Vodka", price: "$6.000" },
  { name: "Jagger", price: "$6.500" },
  { name: "Blue", price: "$6.500" },
  { name: "Mojito Espumante", price: "$6.500" },
  { name: "Mojito sin Alcohol", price: "$5.500" },
  { name: "Mojito Frutal sin Alcohol", price: "$7.000" },
  { name: "Piña Colada sin Alcohol", price: "$6.000" }
];

export const ESPUMANTES = [
  { name: "Riccadonna", price: "$19.000" },
  { name: "Sensus Brut", price: "$12.000" },
  { name: "Sensus Moscalte Dolce", price: "$12.000" },
  { name: "Riccadonna 200 CC", price: "$6.500" }
];

export const PISCO = [
  { name: "Mistral 35", price: "$4.000" },
  { name: "Mistral 40", price: "$4.500" },
  { name: "Mistral Apple", price: "$6.000" },
  { name: "Mistral Honey", price: "$6.000" },
  { name: "Alto del Carmen 35", price: "$4.000" },
  { name: "Alto del Carmen 40", price: "$4.500" },
  { name: "Horcon Quemado 35", price: "$5.500" },
  { name: "Horcon Quemado 40", price: "$6.000" },
  { name: "Mistral Nobel Barrica Tostada", price: "$6.500" },
  { name: "Malpaso 35", price: "$4.500" },
  { name: "Malpaso 40", price: "$6.000" },
  { name: "Republicano 35", price: "$5.000" }
];

export const RON = [
  { name: "Habana Club Especial", price: "$3.500" },
  { name: "Añejo 7 Años", price: "$6.500" },
  { name: "Reserva", price: "$4.000" },
  { name: "Pampero", price: "$5.000" },
  { name: "Habana Club Selección de Maestro", price: "$11.000" },
  { name: "Matusalem", price: "$7.000" },
  { name: "Malibu", price: "$5.000" }
];

export const VODKA = [
  { name: "Stolichnaya", price: "$4.500" },
  { name: "Sky", price: "$4.500" },
  { name: "Absolut", price: "$5.500" }
];

export const GIN = [
  { name: "Beefeater Pink", price: "$6.500" },
  { name: "Beefeater", price: "$5.500" },
  { name: "Beefeater Orange", price: "$6.000" },
  { name: "Tanqueray", price: "$5.500" },
  { name: "Tanqueray Sevilla Royal", price: "$5.500" },
  { name: "Bulldog", price: "$7.500" },
  { name: "Hendricks", price: "$8.000" },
  { name: "Bombay Sapphire", price: "$5.500" },
  { name: "Bombay Raspberry", price: "$6.000" }
];

export const BAJATIVOS = [
  { name: "Menta", price: "$3.000" },
  { name: "Amaretto", price: "$3.000" },
  { name: "Fernet", price: "$6.300" }
];

export const WHISKY = [
  { name: "Jack Daniels Honey", price: "$8.500" },
  { name: "Old 7", price: "$8.500" },
  { name: "Apple", price: "$8.500" },
  { name: "Chivas Regal 12 Años", price: "$8.000" },
  { name: "Johnnie Walker", price: "$12.000" },
  { name: "Black Label", price: "$8.500" },
  { name: "Red Label", price: "$6.500" },
  { name: "Ballantines", price: "$6.500" },
  { name: "Ballantines 12 Años", price: "$11.500" }
];

export const CABERNET_SAUVIGNON = [
  { name: "Marquez de Casa Concha", price: "$21.000" },
  { name: "Misiones de Rengo", price: "$9.000" },
  { name: "Casillero del Diablo", price: "$4.500" },
  { name: "Medalla Real", price: "$12.900" }
];

export const CARMENERE = [
  { name: "Marquez de Casa Concha", price: "$19.800" },
  { name: "Casillero del Diablo", price: "$7.000" },
  { name: "Casillero Reserva Privada", price: "$14.900" }
];

export const MERLOT = [
  { name: "Castillo Molina", price: "$14.900" },
  { name: "Misiones de Rengo, Cuvee", price: "$13.900" }
];

// Productos que también salieron de la carta nueva y estaban en otras secciones.
export const OTROS_RETIRADOS = [
  { name: "Agua Perrier", price: "$2.500", seccion: "Bebidas" },
  { name: "Jugo de Maracuyá", price: "$4.000", seccion: "Jugos naturales" },
  { name: "Jugo de Frambuesa", price: "$4.000", seccion: "Jugos naturales" }
];

export const SECCIONES_RETIRADAS = [
  { id: "cervezas", title: "Cervezas", subtitle: "Botellas, shop y micheladas.", items: CERVEZAS },
  { id: "cerveza-sin-alcohol", title: "Cerveza sin alcohol", subtitle: "Opciones 0°.", items: CERVEZA_SIN_ALCOHOL },
  { id: "clasicos", title: "Clásicos", subtitle: "Coctelería de la casa.", items: CLASICOS },
  { id: "mojitos", title: "Mojitos", subtitle: "Clásicos, sabores y sin alcohol.", items: MOJITOS },
  { id: "espumantes", title: "Espumantes", subtitle: "Para celebrar.", items: ESPUMANTES },
  { id: "pisco", title: "Pisco", subtitle: "Servicio simple.", items: PISCO },
  { id: "ron", title: "Ron (sin bebida)", subtitle: "Servicio simple.", items: RON },
  { id: "vodka", title: "Vodka", subtitle: "Servicio simple.", items: VODKA },
  { id: "gin", title: "Gin", subtitle: "Servicio simple.", items: GIN },
  { id: "bajativos", title: "Bajativos", subtitle: "Para el cierre.", items: BAJATIVOS },
  { id: "whisky", title: "Whisky", subtitle: "Selección de la casa.", items: WHISKY },
  { id: "cabernet-sauvignon", title: "Cabernet Sauvignon", subtitle: "Vinos en botella.", items: CABERNET_SAUVIGNON },
  { id: "carmenere", title: "Carmenere", subtitle: "Vinos en botella.", items: CARMENERE },
  { id: "merlot", title: "Merlot", subtitle: "Vinos en botella.", items: MERLOT }
];
