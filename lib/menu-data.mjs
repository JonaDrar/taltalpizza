// Fuente única de la carta. La lee tanto app/menu/page.js como
// scripts/generar-imagenes.mjs, así el menú y las fotos nunca se desincronizan.
//
// Datos tomados de "CARTA TALTAL PIZZA.pdf" (12-07-2026). Las secciones de barra
// y vinos que estaban publicadas antes quedaron respaldadas en lib/legacy/barra-y-vinos.js.
//
// `photo` es el slug del archivo en public/menu/<photo>.png. La página solo muestra
// la foto si el archivo existe, así que se pueden generar de a poco sin romper nada.

const PIZZAS = [
  {
    name: "Napolitana",
    desc: "Salsa, jamón, tomate, queso, aceitunas.",
    photo: "pizzas/napolitana"
  },
  {
    name: "Hawaiana",
    desc: "Salsa, jamón, tomate, queso, piña.",
    photo: "pizzas/hawaiana"
  },
  {
    name: "Americana",
    desc: "Salsa, jamón, tomate, queso, carne.",
    photo: "pizzas/americana"
  },
  {
    name: "Vegetariana",
    desc: "Salsa, queso, tomate, champiñón, aceituna, pimentón.",
    vegetarian: true,
    photo: "pizzas/vegetariana"
  },
  {
    name: "Española",
    desc: "Salsa, tomate, queso, salame, chorizo.",
    photo: "pizzas/espanola"
  },
  {
    name: "Chicken",
    desc: "Salsa, pollo, queso, pimentón, aceitunas.",
    photo: "pizzas/chicken"
  },
  {
    name: "Italiana",
    desc: "Salsa, jamón, tomate, queso, palta.",
    photo: "pizzas/italiana"
  },
  {
    name: "Cuatro carnes",
    desc: "Salsa, pollo, atún, queso, carne, tocino.",
    photo: "pizzas/cuatro-carnes"
  },
  {
    name: "Clásica",
    desc: "Salsa, aceituna, pimentón, champiñón, salame, pepperoni.",
    photo: "pizzas/clasica"
  },
  {
    name: "Chilena",
    desc: "Salsa, tomate, queso, carne, aceitunas, cebolla frita.",
    photo: "pizzas/chilena"
  },
  {
    name: "Jardinera",
    desc: "Salsa, choclo, pimentón, cebolla frita, aceituna.",
    vegetarian: true,
    photo: "pizzas/jardinera"
  },
  {
    name: "Salame",
    desc: "Salsa, tomate, extra salame.",
    photo: "pizzas/salame"
  },
  {
    name: "Bacon",
    desc: "Salsa, jamón, tomate, queso, tocino.",
    photo: "pizzas/bacon"
  },
  {
    name: "Pepperoni",
    desc: "Salsa, extra pepperoni, queso.",
    photo: "pizzas/pepperoni"
  },
  {
    name: "Tropical",
    desc: "Salsa, tomate, queso, piña, pepperoni.",
    photo: "pizzas/tropical"
  },
  {
    name: "Suprema",
    desc: "Salsa, pollo, queso, carne, chorizo.",
    photo: "pizzas/suprema"
  },
  {
    name: "Alemana",
    desc: "Salsa, jamón, queso, carne, choclo, pimentón.",
    photo: "pizzas/alemana"
  },
  {
    name: "Premium",
    desc: "Salsa, queso, carne, pimentón, champiñón.",
    photo: "pizzas/premium"
  },
  {
    name: "Combinada",
    desc: "Salsa, jamón, queso, champiñón, salame, chorizo, cebolla.",
    badge: "Mix",
    photo: "pizzas/combinada"
  }
];

const INGREDIENTES = [
  "Pollo",
  "carne",
  "atún",
  "tocino",
  "chorizo",
  "salame",
  "pepperoni",
  "tomate",
  "pimentón",
  "palta",
  "cebolla",
  "aceituna",
  "champiñón",
  "choclo"
];

const BRUNCH_SALADO = [
  {
    name: "Tostada Power",
    desc: "Ciabatta, huevo frito, tocino, palta, tomate cherry.",
    price: "$7.500",
    photo: "brunch-salado/tostada-power"
  },
  {
    name: "Tostada de Champiñones",
    desc: "Ciabatta, champiñones, queso gouda, quesillo.",
    price: "$6.500",
    photo: "brunch-salado/tostada-champinones"
  },
  {
    name: "Tostada Vegana",
    desc: "Ciabatta, palta, lechuga, cebolla caramelizada, champiñones.",
    price: "$6.500",
    photo: "brunch-salado/tostada-vegana"
  },
  {
    name: "Tostada Bacon Butty",
    desc: "Ciabatta, carne, queso, tocino, papas fritas.",
    price: "$7.500",
    photo: "brunch-salado/tostada-bacon-butty"
  },
  {
    name: "Ciabatta Deluxe",
    desc: "Ciabatta, jamón acaramelado, mozzarella, huevo, mantequilla, rúcula, tomates cherry.",
    price: "$6.500",
    photo: "brunch-salado/ciabatta-deluxe"
  },
  {
    name: "Huevos Benedictinos",
    desc: "Huevo, pan amasado, jamón, cebollín.",
    price: "$6.000",
    photo: "brunch-salado/huevos-benedictinos",
    prompt:
      "Eggs Benedict served on Chilean 'pan amasado': a rustic, round, flat, homemade wheat bread " +
      "roll with a pale floury crust and a dense crumb — NOT an English muffin, NOT a brioche, " +
      "NOT a toasted burger bun. On top of the bread: a slice of ham, a poached egg with a runny " +
      "yolk, hollandaise sauce and chopped chives. On a ceramic plate, seen from a 45-degree angle."
  },
  {
    name: "Ciabatta Americana",
    desc: "Pan ciabatta, carne, queso, cebolla caramelizada, rúcula, salsas.",
    price: "$7.500",
    photo: "brunch-salado/ciabatta-americana"
  }
];

const BRUNCH_DULCE = [
  {
    name: "Tostada Francesa",
    desc: "Pan molde, miel, frutillas, plátano, arándanos.",
    price: "$5.000",
    photo: "brunch-dulce/tostada-francesa"
  },
  {
    // "Frutellas" no es un typo: es el juego de palabras entre FRUTIllas y NuTELLA.
    name: "Frutellas",
    desc: "Croissant, Nutella, frutillas, crema batida, chocolate.",
    price: "$5.500",
    photo: "brunch-dulce/frutillas"
  },
  {
    name: "Panqueques",
    desc: "Panqueques XL, arándanos, chispas de chocolate, manjar.",
    price: "$6.000",
    photo: "brunch-dulce/panqueques"
  },
  {
    name: "Bowl de Mini Panqueques",
    desc: "Mini panqueques, plátanos, frutillas, salsa de chocolate y manjar.",
    price: "$5.000",
    photo: "brunch-dulce/bowl-mini-panqueques"
  },
  {
    name: "Wafles",
    desc: "Wafles con fruta, salsas y helado.",
    price: "$4.500",
    photo: "brunch-dulce/wafles"
  }
];

const BOWLS_PROTEICOS = [
  {
    name: "Bowl de Vainilla y Fresa",
    desc: "Yogurt de vainilla, granola, plátano y fresas, crema de maní, láminas de almendra.",
    price: "$4.000",
    photo: "bowls/vainilla-fresa"
  },
  {
    name: "Bowl Sensación de Piña",
    desc: "Yogurt de piña, piña, granola, semillas de chía, frambuesas (temporada).",
    price: "$4.000",
    photo: "bowls/sensacion-pina"
  }
];

const HAMBURGUESAS = [
  {
    name: "Hamburguesa Tradicional",
    desc: "Pan brioche, hamburguesa 185 g, queso cheddar, papas fritas.",
    price: "$7.000",
    photo: "hamburguesas/tradicional"
  },
  {
    name: "Hamburguesa Clásica Gourmet",
    desc: "Pan brioche, hamburguesa 185 g, queso cheddar, lechuga, tomate, pepinillos, papas fritas.",
    price: "$7.800",
    photo: "hamburguesas/clasica-gourmet"
  },
  {
    name: "BBQ Bacon",
    desc: "Pan brioche, hamburguesa 185 g, queso cheddar, tocino, cebolla caramelizada, salsa BBQ, papas fritas.",
    price: "$7.500",
    photo: "hamburguesas/bbq-bacon"
  },
  {
    name: "Italiana Premium",
    desc: "Pan brioche, hamburguesa 185 g, queso, palta, tomate.",
    price: "$7.800",
    photo: "hamburguesas/italiana-premium"
  },
  {
    name: "Criolla",
    desc: "Pan brioche, hamburguesa 185 g, queso cheddar, cebolla caramelizada, tocino, huevo frito, papas fritas.",
    price: "$7.800",
    photo: "hamburguesas/criolla"
  },
  {
    name: "Champiñón",
    desc: "Pan brioche, hamburguesa 185 g, queso, champiñones salteados, rúcula, papas fritas.",
    price: "$7.800",
    photo: "hamburguesas/champinon"
  }
];

const TABLAS = [
  {
    name: "Tabla Clásica",
    desc: "Papas fritas, lomo liso, pollo, chorizo, vienesa.",
    price: "Mediana $18.000 · Grande $24.000",
    photo: "tablas/clasica"
  },
  {
    name: "Suprema",
    desc: "Papas fritas, lomo liso, pollo, tocino, queso cheddar, cebolla caramelizada.",
    price: "Mediana $17.500 · Grande $23.500",
    photo: "tablas/suprema"
  },
  {
    name: "Tabla Parrillera",
    desc: "Papas fritas, chorizo, lomo liso, pulpa de cerdo BBQ.",
    price: "Mediana $18.500 · Grande $24.500",
    photo: "tablas/parrillera"
  },
  {
    name: "Tabla Campestre",
    desc: "Papas fritas, lomo liso, pollo, champiñones salteados, cebolla caramelizada.",
    price: "Mediana $16.500 · Grande $22.500",
    photo: "tablas/campestre"
  },
  {
    name: "Mar y Tierra",
    desc: "Papas fritas, camarones, pollo, lomo liso, queso gouda.",
    price: "Mediana $18.000 · Grande $24.000",
    photo: "tablas/mar-y-tierra"
  },
  {
    name: "Lomo Salteado",
    desc: "Papas fritas, lomo, cebolla, tomate, salteados.",
    price: "Mediana $17.000 · Grande $23.000",
    photo: "tablas/lomo-salteado"
  },
  {
    name: "Papas Fritas Individuales",
    price: "$3.800",
    photo: "tablas/papas-fritas",
    prompt:
      "A single portion of plain classic French fries, golden and crispy, served in a simple bowl. " +
      "ONLY fries and nothing else: no meat, no cheese, no sauce, no toppings, no garnish. " +
      "Seen from a 45-degree angle."
  },
  {
    name: "Papas Fritas con Tocino y Salsa de Queso Cheddar",
    price: "$7.000",
    photo: "tablas/papas-tocino-cheddar"
  }
];

const EXTRAS_TABLAS = [
  "Queso cheddar",
  "tocino crocante",
  "champiñones salteados",
  "cebolla caramelizada",
  "huevo frito",
  "palta"
];

const AL_PLATO = [
  {
    name: "Lomo a lo Pobre",
    desc: "250 g de lomo liso a la plancha, cebolla caramelizada, huevo, papas fritas.",
    price: "$16.500",
    photo: "al-plato/lomo-a-lo-pobre"
  },
  {
    name: "Lomo Salteado",
    desc: "Trozos de lomo salteados con verduras y soya en wok, con papas fritas.",
    price: "$15.000",
    photo: "al-plato/lomo-salteado"
  },
  // Los platos "con agregado" llevan la carne sola a la plancha y los acompañamientos
  // AL LADO (arroz, ensalada o papas fritas). Sin prompt explícito, el modelo apilaba
  // queso, jamón y huevo encima de la carne.
  {
    name: "Lomo Liso con Agregado",
    desc: "250 g de lomo liso con 2 agregados a elección.",
    price: "$14.500",
    photo: "al-plato/lomo-liso",
    prompt:
      "A grilled beef steak (lomo liso) served on a ceramic plate with TWO side dishes next to it: " +
      "a portion of plain white rice and a portion of french fries. The steak is plain and grilled, " +
      "with NOTHING on top of it: no cheese, no ham, no egg, no fries on top, no sauce piled on it. " +
      "The steak and the two sides sit SEPARATELY side by side on the plate. Seen from a 45-degree angle."
  },
  {
    name: "Chuleta de Centro",
    desc: "Chuleta de centro con agregado.",
    price: "$7.800",
    photo: "al-plato/chuleta-centro",
    prompt:
      "A grilled bone-in pork chop served on a ceramic plate with TWO side dishes next to it: " +
      "a portion of french fries and a simple green side salad (lettuce and tomato). The pork chop " +
      "is plain and grilled with NOTHING on top of it. The chop and the two sides sit SEPARATELY " +
      "side by side on the plate. Seen from a 45-degree angle."
  },
  {
    name: "Chuleta Vetada",
    desc: "Chuleta vetada con agregado.",
    price: "$8.200",
    photo: "al-plato/chuleta-vetada",
    prompt:
      "A grilled marbled pork chop served on a ceramic plate with TWO side dishes next to it: " +
      "a portion of plain white rice and a simple green side salad (lettuce and tomato). The chop " +
      "is plain and grilled with NOTHING on top of it. The chop and the two sides sit SEPARATELY " +
      "side by side on the plate. Seen from a 45-degree angle."
  },
  {
    name: "Pechuga de Pollo a la Plancha",
    desc: "Pechuga de pollo con agregado.",
    price: "$7.900",
    photo: "al-plato/pechuga-pollo",
    prompt:
      "A plain grilled chicken breast served on a ceramic plate with TWO side dishes next to it: " +
      "a portion of plain white rice and a portion of french fries. The chicken breast is plain and " +
      "grilled, with NOTHING on top of it: no avocado, no cherry tomatoes, no red onion, no peppers, " +
      "no gourmet salad. The chicken and the two sides sit SEPARATELY side by side on the plate. " +
      "Seen from a 45-degree angle."
  },
  {
    name: "Lomo Vetado con Agregado",
    desc: "250 g de lomo vetado a la plancha con agregado.",
    price: "$16.000",
    photo: "al-plato/lomo-vetado",
    prompt:
      "A grilled marbled ribeye steak (lomo vetado) served on a ceramic plate with TWO side dishes " +
      "next to it: a portion of french fries and a portion of plain white rice. The steak is plain " +
      "and grilled, with NOTHING on top of it: no cheese, no ham, no egg, no sauce piled on it. " +
      "The steak and the two sides sit SEPARATELY side by side on the plate. Seen from a 45-degree angle."
  },
  {
    name: "Lomo Vetado a lo Pobre",
    desc: "250 g de lomo vetado a la plancha, cebolla caramelizada, huevo, papas fritas.",
    price: "$17.500",
    photo: "al-plato/lomo-vetado-a-lo-pobre"
  },
  {
    name: "Fetuccini a la Bolognesa",
    desc: "Porción de fetuccini con salsa bolognesa.",
    price: "$7.500",
    photo: "al-plato/fetuccini-bolognesa"
  },
  {
    name: "Nuggets con Papas (niños)",
    desc: "Porción infantil.",
    price: "$8.900",
    photo: "al-plato/nuggets-papas"
  },
  {
    name: "Ensalada Surtida",
    price: "$2.500",
    photo: "al-plato/ensalada-surtida",
    vegetarian: true,
    prompt:
      "A simple mixed side salad on a ceramic plate: lettuce, tomato, cucumber, carrot and onion. " +
      "ONLY vegetables — NO chicken, NO meat, NO egg, NO cheese, no protein of any kind. " +
      "It is a small side dish. Seen from a 45-degree angle."
  },
  {
    name: "Porción de Arroz",
    price: "$1.500",
    photo: "al-plato/porcion-arroz",
    vegetarian: true,
    prompt:
      "A side portion of PLAIN WHITE STEAMED RICE on a ceramic plate. Just white rice and nothing " +
      "else: NO vegetables, NO peas, NO chorizo, NO sausage, NO meat, NO sauce, NO saffron, " +
      "not fried rice, not paella. Seen from a 45-degree angle."
  }
];

const QUESADILLAS = [
  {
    name: "Quesadilla Lomo",
    desc: "Lomo, queso fundido, cebolla morada, cilantro.",
    price: "$13.200",
    photo: "quesadillas/lomo"
  },
  {
    name: "Quesadilla Chicken",
    desc: "Pollo, queso fundido.",
    price: "$12.200",
    photo: "quesadillas/chicken"
  },
  {
    name: "Quesadilla Marina",
    desc: "Camarones a la mantequilla, queso fundido, cebolla morada.",
    price: "$12.500",
    photo: "quesadillas/marina"
  },
  {
    name: "Quesadilla Vegetariana",
    desc: "Champiñones salteados, pimentón, cebolla morada, queso (opcional).",
    price: "$10.500",
    vegetarian: true,
    photo: "quesadillas/vegetariana"
  },
  {
    name: "Quesadilla de Tocino",
    desc: "Queso cheddar, tocino, cebolla caramelizada.",
    price: "$10.500",
    photo: "quesadillas/tocino"
  }
];

const JUGOS_VITAMINICOS = [
  {
    name: "Naranja - Jengibre",
    price: "$4.500",
    photo: "jugos/naranja-jengibre"
  },
  {
    name: "Naranja - Zanahoria - Betarraga",
    price: "$4.700",
    photo: "jugos/naranja-zanahoria-betarraga"
  },
  {
    name: "Jugo Verde (Detox)",
    desc: "Manzana, pepino, apio, kiwi.",
    price: "$4.900",
    photo: "jugos/jugo-verde"
  },
  {
    name: "Manzana Refrescante",
    desc: "Manzana verde, pepino, limón.",
    price: "$4.000",
    photo: "jugos/manzana-refrescante"
  },
  {
    name: "Antioxidante Rojo",
    desc: "Frutilla, manzana roja, betarraga.",
    price: "$4.700",
    photo: "jugos/antioxidante-rojo"
  }
];

const JUGOS_NATURALES = [
  {
    name: "Jugo de Frutilla",
    price: "$4.000",
    photo: "jugos/frutilla"
  },
  {
    name: "Jugo de Piña",
    price: "$4.000",
    photo: "jugos/pina"
  },
  {
    name: "Plátano con Leche",
    price: "$3.200",
    photo: "jugos/platano-leche"
  },
  {
    name: "Mango con Leche",
    price: "$3.900",
    photo: "jugos/mango-leche"
  },
  {
    name: "Limonada Clásica",
    price: "$3.500",
    photo: "jugos/limonada-clasica"
  },
  {
    name: "Limonada Menta Jengibre",
    price: "$4.000",
    photo: "jugos/limonada-menta-jengibre"
  }
];

// Sin `photo`: son marcas registradas, no se generan imágenes de ellas.
const BEBIDAS_LATA = [
  { name: "Coca-Cola Zero", price: "$2.000" },
  { name: "Coca-Cola Tradicional", price: "$2.000" },
  { name: "Sprite Tradicional", price: "$2.000" },
  { name: "Fanta", price: "$2.000" },
  { name: "Pap", price: "$2.000" },
  { name: "Bilz", price: "$2.000" },
  { name: "Pepsi", price: "$2.000" },
  { name: "Limón Soda", price: "$2.000" },
  { name: "Kem", price: "$2.000" },
  { name: "Agua Mineral con y sin Gas (500cc)", price: "$1.500" },
  { name: "Red Bull", price: "$2.300" },
  { name: "Monster", price: "$2.400" }
];

const BEBIDAS_15 = [
  { name: "Coca-Cola Zero", price: "$3.000" },
  { name: "Coca-Cola Tradicional", price: "$3.000" },
  { name: "Sprite", price: "$3.000" },
  { name: "Fanta", price: "$3.000" },
  { name: "Pepsi", price: "$3.000" },
  { name: "Bilz", price: "$3.000" },
  { name: "Agua Mineral con y sin Gas", price: "$2.500" }
];

const CAFES_CALIENTES = [
  { name: "Espresso", photo: "cafes/espresso" },
  { name: "Americano", photo: "cafes/americano" },
  {
    // Ojo con estas tres fotos: no hay barista en el local, así que la espuma
    // tiene que salir LISA, sin arte latte ni dibujos de sirope.
    name: "Capuccino Sabores",
    photo: "cafes/capuccino-sabores",
    prompt:
      "A classic cappuccino in a white cup on a saucer: espresso with steamed milk and a thick " +
      "creamy foam top, lightly dusted with cinnamon and cocoa powder. The foam surface is PLAIN " +
      "and smooth: ABSOLUTELY NO latte art, NO rosetta, NO heart, NO drawn patterns, NO syrup " +
      "drizzle on top, NO bright coloured sauces, NO artificial food colouring. " +
      "Seen from a 45-degree angle."
  },
  {
    name: "Cortado",
    photo: "cafes/cortado",
    prompt:
      "A cortado: espresso with a small amount of steamed milk in a white cup on a saucer. The " +
      "milk foam surface is PLAIN and uniform: ABSOLUTELY NO latte art, NO rosetta, NO heart, " +
      "NO drawn patterns of any kind. Seen from a 45-degree angle."
  },
  {
    name: "Capuccino",
    photo: "cafes/capuccino",
    prompt:
      "A classic cappuccino in a white cup on a saucer: espresso with steamed milk and a thick " +
      "creamy white foam top. The foam surface is PLAIN and smooth: ABSOLUTELY NO latte art, " +
      "NO rosetta, NO heart, NO drawn patterns of any kind. Seen from a 45-degree angle."
  },
  {
    name: "Té Supremo",
    price: "$1.900",
    photo: "cafes/te-supremo",
    props: "te",
    prompt:
      "A cup of black tea: a white cup on a saucer filled with amber-brown brewed TEA, with a " +
      "TEA BAG resting in the cup and its paper tag hanging over the rim. This is TEA, not coffee: " +
      "NO espresso, NO milk foam, NO latte art. Seen from a 45-degree angle on a wooden table."
  }
];

const CAFES_PREMIUM = [
  {
    name: "Crème Brûlée Latte",
    desc: "Nuestro latte insignia. Espresso de especialidad, vainilla y caramelo se unen bajo una delicada capa caramelizada que recuerda al clásico postre francés. Dulce, cremoso e irresistible.",
    price: "$4.000",
    badge: "Insignia",
    photo: "cafes/creme-brulee-latte"
  },
  {
    name: "Honey Cinnamon Latte",
    desc: "La combinación perfecta entre café de especialidad, miel natural y un toque de canela. Un latte suave, aromático y reconfortante, ideal para cualquier momento del día.",
    price: "$4.000",
    photo: "cafes/honey-cinnamon-latte",
    // Sin barista en el local: espuma lisa, nada de arte latte.
    prompt:
      "A honey cinnamon latte in a white cup on a saucer: espresso with steamed milk, lightly " +
      "dusted with ground cinnamon, with a cinnamon stick beside the cup. The milk foam surface " +
      "is PLAIN and smooth: ABSOLUTELY NO latte art, NO rosetta, NO heart, NO drawn patterns of " +
      "any kind, NO syrup drizzle on top. Seen from a 45-degree angle."
  },
  {
    name: "Brownie Mocha",
    desc: "Para los amantes del chocolate. Espresso intenso, chocolate premium y leche cremosa, terminado con chantilly y trozos de brownie.",
    price: "$4.000",
    photo: "cafes/brownie-mocha"
  }
];

const CAFES_FRIOS = [
  {
    name: "Ice Caramel",
    desc: "Café espresso, leche, salsa de caramelo, crema batida, hielo.",
    price: "$4.500",
    photo: "cafes-frios/caramel-frapuccino",
    prompt:
      "A caramel frappuccino in a tall clear glass. The CARAMEL SAUCE is drizzled in thick ribbons " +
      "down the INSIDE WALLS of the glass, clearly visible through the clear glass against the " +
      "blended coffee. Topped with whipped cream and a caramel drizzle. Seen from a 45-degree angle."
  },
  {
    name: "Iced Caramel Macchiato",
    desc: "Leche, café espresso, jarabe de vainilla, salsa de caramelo, hielo.",
    price: "$4.500",
    photo: "cafes-frios/iced-caramel-macchiato"
  },
  {
    name: "Iced Mocha",
    desc: "Leche, café capuccino, jarabe de chocolate, crema batida, hielo.",
    price: "$4.500",
    photo: "cafes-frios/iced-mocha"
  },
  {
    name: "Iced Latte",
    desc: "Café espresso, leche, leche condensada, hielo.",
    price: "$4.500",
    photo: "cafes-frios/iced-latte"
  },
  {
    name: "Café Helado",
    desc: "Café espresso, helado de vainilla, leche, crema batida.",
    price: "$5.000",
    photo: "cafes-frios/cafe-helado"
  }
];

// `photoStyle` le dice al generador cómo encuadrar cada familia de platos.
// Ver scripts/generar-imagenes.mjs.
export const SECTIONS = [
  {
    id: "pizzas",
    title: "Pizzas",
    subtitle: "Individual $6.500 · Familiar $10.500 · XL $13.500",
    photoStyle: "pizza",
    items: PIZZAS
  },
  {
    id: "arma-tu-pizza",
    title: "Ármala a tu gusto",
    subtitle: "Ingredientes extra disponibles.",
    note: "Agrega tus favoritos según disponibilidad.",
    chips: INGREDIENTES
  },
  {
    id: "brunch-salado",
    title: "Brunch salado",
    subtitle: "Tostadas y ciabattas.",
    photoStyle: "plato",
    items: BRUNCH_SALADO
  },
  {
    id: "brunch-dulce",
    title: "Brunch dulce",
    subtitle: "Para el antojo.",
    photoStyle: "postre",
    items: BRUNCH_DULCE
  },
  {
    id: "bowls-proteicos",
    title: "Bowls proteicos",
    subtitle: "Yogurt, granola y fruta.",
    photoStyle: "bowl",
    items: BOWLS_PROTEICOS
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    subtitle: "Todas con pan brioche y hamburguesa de 185 g.",
    photoStyle: "hamburguesa",
    items: HAMBURGUESAS
  },
  {
    id: "tablas",
    title: "Tablas para compartir",
    subtitle: "En tamaño mediano o grande.",
    note: "Agrega ingredientes extra a tu elección: $2.000 c/u.",
    photoStyle: "tabla",
    items: TABLAS,
    chips: EXTRAS_TABLAS
  },
  {
    id: "al-plato",
    title: "Al plato",
    subtitle: "Carnes, pastas y agregados.",
    photoStyle: "plato",
    items: AL_PLATO
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    subtitle: "Con queso fundido.",
    photoStyle: "plato",
    items: QUESADILLAS
  },
  {
    id: "jugos-vitaminicos",
    title: "Jugos (extractos vitamínicos)",
    subtitle: "Preparados al momento.",
    photoStyle: "jugo",
    items: JUGOS_VITAMINICOS
  },
  {
    id: "jugos-naturales",
    title: "Jugos naturales",
    subtitle: "Fruta natural y limonadas.",
    photoStyle: "jugo",
    items: JUGOS_NATURALES
  },
  {
    id: "bebidas-lata",
    title: "Bebidas (lata 350cc)",
    subtitle: "Refrescos y energéticas.",
    items: BEBIDAS_LATA
  },
  {
    id: "bebidas-15",
    title: "Bebidas 1.5 L",
    subtitle: "Para compartir en mesa.",
    items: BEBIDAS_15
  },
  {
    id: "cafes-calientes",
    title: "Cafés calientes clásicos",
    subtitle: "8oz $2.000 · 12oz $2.300",
    photoStyle: "cafe",
    items: CAFES_CALIENTES
  },
  {
    id: "cafes-premium",
    title: "Cafés calientes premium",
    subtitle: "Café de especialidad.",
    photoStyle: "cafe",
    items: CAFES_PREMIUM
  },
  {
    id: "cafes-frios",
    title: "Cafés fríos",
    subtitle: "Con hielo y crema.",
    photoStyle: "cafe-frio",
    items: CAFES_FRIOS
  }
];
