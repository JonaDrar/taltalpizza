import Image from "next/image";
import { getSiteUrl } from "../../lib/site-url";
import MenuClient from "./MenuClient";

const siteUrl = getSiteUrl();

const PIZZAS_CLASICAS = [
  {
    name: "Napolitana",
    desc: "Queso, salsa, tomate, jamón, aceituna."
  },
  {
    name: "Hawaiana",
    desc: "Queso, salsa, tomate, jamón, piña."
  },
  {
    name: "Americana",
    desc: "Queso, salsa, tomate, jamón, carne, orégano."
  },
  {
    name: "Vegetariana",
    desc: "Queso, salsa, tomate, champiñón, aceituna, pimentón."
  },
  {
    name: "Española",
    desc: "Queso, salsa, tomate, chorizo, salame."
  },
  {
    name: "Chicken",
    desc: "Queso, salsa, pollo, pimentón, aceituna."
  },
  {
    name: "Italiana",
    desc: "Queso, salsa, tomate, palta, jamón."
  },
  {
    name: "Cuatro carnes",
    desc: "Queso, salsa, pollo, carne, atún, tocino."
  },
  {
    name: "Clásica",
    desc: "Champiñón, salame, pepperoni, pimentón, aceituna."
  }
];

const PIZZAS_FAVORITAS = [
  {
    name: "Chilena",
    desc: "Queso, salsa, tomate, carne, cebolla, aceituna."
  },
  {
    name: "Jardinera",
    desc: "Queso, salsa, choclo, pimentón, cebolla, aceituna."
  },
  {
    name: "Salame",
    desc: "Queso, salsa, tomate, extra salame, orégano."
  },
  {
    name: "Bacon",
    desc: "Queso, salsa, tomate, jamón, tocino."
  },
  {
    name: "Pepperoni",
    desc: "Doble queso, salsa, extra pepperoni."
  },
  {
    name: "Tropical",
    desc: "Queso, salsa, tomate, pepperoni, piña."
  },
  {
    name: "Suprema",
    desc: "Queso, salsa, carne, pollo, chorizo."
  },
  {
    name: "Alemana",
    desc: "Queso, salsa, jamón, carne, choclo, pimentón."
  },
  {
    name: "Premium",
    desc: "Carne, pimentón, champiñón."
  }
];

const COMBINADA = "Jamón, chorizo, champiñón, salame, cebolla.";
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

const CERVEZAS = [
  {
    name: "Corona",
    price: "$3.000"
  },
  {
    name: "Royal",
    price: "$3.000"
  },
  {
    name: "Heineken",
    price: "$3.000"
  },
  {
    name: "Sol",
    price: "$3.000"
  },
  {
    name: "Budweiser",
    price: "$3.000"
  },
  {
    name: "Kunstmann Torobayo",
    price: "$3.800"
  },
  {
    name: "Kunstmann Layer",
    price: "$3.800"
  },
  {
    name: "Austral Layer",
    price: "$3.800"
  },
  {
    name: "Austral Calafate",
    price: "$3.800"
  },
  {
    name: "Austral Torres del Paine",
    price: "$3.800"
  },
  {
    name: "Austral Variedades",
    price: "$3.800"
  },
  {
    name: "Shop Heineken 500cc",
    price: "$4.500"
  },
  {
    name: "Shop Kunstmann 500cc /1000cc",
    price: "$5.500"
  },
  {
    name: "Shop Stella Artois 500cc/ 1000cc",
    price: "$5.000"
  },
  {
    name: "Stella",
    price: "$3.000"
  },
  {
    name: "Chelada / Michelada",
    price: "$1.300"
  },
  {
    name: "Gran Torobayo 500cc",
    price: "$4.800"
  }
];

const CERVEZA_SIN_ALCOHOL = [
  {
    name: "Kunstmann Lager",
    price: "$3.000"
  },
  {
    name: "Heineken",
    price: "$3.000"
  },
  {
    name: "Variedades",
    price: "$3.000"
  }
];

const CLASICOS = [
  {
    name: "Piña Colada",
    price: "$6.000"
  },
  {
    name: "Pisco Sour",
    price: "$5.000"
  },
  {
    name: "Catedral",
    price: "$8.500"
  },
  {
    name: "Mango Sour",
    price: "$6.000"
  },
  {
    name: "Maracuya Sour",
    price: "$6.000"
  },
  {
    name: "Tequila Margarita",
    price: "$5.500"
  },
  {
    name: "Tequila Blue",
    price: "$5.500"
  },
  {
    name: "Amaretto Sour",
    price: "$6.500"
  },
  {
    name: "Primavera",
    price: "$5.000"
  },
  {
    name: "Martini Seco",
    price: "$6.000"
  },
  {
    name: "Tom Colins",
    price: "$5.500"
  },
  {
    name: "Aperol Spritz",
    price: "$7.000"
  },
  {
    name: "Vaina",
    price: "$6.000"
  },
  {
    name: "Baileys",
    price: "$6.300"
  },
  {
    name: "Clavo Oxidado",
    price: "$8.000"
  },
  {
    name: "Daiquiri",
    price: "$5.500"
  },
  {
    name: "Caipirinha",
    price: "$5.500"
  },
  {
    name: "Caipiroska",
    price: "$6.000"
  },
  {
    name: "Ramazotti Spritz",
    price: "$7.000"
  },
  {
    name: "Ramazotti Violeto",
    price: "$7.000"
  },
  {
    name: "Ramazotti Maracuya",
    price: "$7.000"
  },
  {
    name: "Old Fashioned",
    price: "$6.000"
  },
  {
    name: "Pink Collins",
    price: "$8.000"
  },
  {
    name: "Moscow Mule",
    price: "$7.000"
  },
  {
    name: "Tequila Sunrise",
    price: "$5.500"
  },
  {
    name: "Sangria Copa",
    price: "$7.000"
  },
  {
    name: "Gin de Verano",
    price: "$8.000"
  },
  {
    name: "Jaggermeister",
    price: "$4.000"
  },
  {
    name: "Whisky Sour",
    price: "$8.000"
  },
  {
    name: "Ruso Blanco",
    price: "$6.000"
  }
];

const MOJITOS = [
  {
    name: "Clasico",
    price: "$5.500"
  },
  {
    name: "Sabores",
    price: "$6.500"
  },
  {
    name: "Black",
    price: "$6.500"
  },
  {
    name: "Corona",
    price: "$8.000"
  },
  {
    name: "Mojito Piña Colada",
    price: "$6.500"
  },
  {
    name: "Mojito Ramazotti",
    price: "$7.500"
  },
  {
    name: "Bulldog",
    price: "$7.000"
  },
  {
    name: "Honey",
    price: "$8.000"
  },
  {
    name: "Apple",
    price: "$8.000"
  },
  {
    name: "Vodka",
    price: "$6.000"
  },
  {
    name: "Jagger",
    price: "$6.500"
  },
  {
    name: "Blue",
    price: "$6.500"
  },
  {
    name: "Mojito Espumante",
    price: "$6.500"
  },
  {
    name: "Mojito sin Alcohol",
    price: "$5.500"
  },
  {
    name: "Mojito Frutal sin Alcohol",
    price: "$7.000"
  },
  {
    name: "Piña Colada sin Alcohol",
    price: "$6.000"
  }
];

const BEBIDAS = [
  {
    name: "Coca Cola Company",
    price: "$2.300"
  },
  {
    name: "CCU",
    price: "$2.300"
  },
  {
    name: "Agua Mineral con y sin Gas",
    price: "$2.000"
  },
  {
    name: "Agua Perrier",
    price: "$2.500"
  },
  {
    name: "Bebida 1.5 LT",
    price: "$3.900"
  },
  {
    name: "Red Bull",
    price: "$2.300"
  },
  {
    name: "Monster",
    price: "$2.400"
  }
];

const JUGOS_NATURALES = [
  {
    name: "Frutilla",
    price: "$3.700"
  },
  {
    name: "Mango",
    price: "$3.700"
  },
  {
    name: "Piña",
    price: "$3.700"
  },
  {
    name: "Maracuya",
    price: "$4.000"
  },
  {
    name: "Frambuesa",
    price: "$4.000"
  },
  {
    name: "Limonada Tradicional",
    price: "$3.500"
  },
  {
    name: "Limonada Menta Jengibre",
    price: "$4.000"
  },
  {
    name: "Platano con Leche",
    price: "$3.200"
  },
  {
    name: "Mango Leche",
    price: "$3.900"
  },
  {
    name: "Frutilla Leche",
    price: "$3.900"
  }
];

const ESPUMANTES = [
  {
    name: "Riccadonna",
    price: "$19.000"
  },
  {
    name: "Sensus Brut",
    price: "$12.000"
  },
  {
    name: "Sensus Moscalte Dolce",
    price: "$12.000"
  },
  {
    name: "Riccadonna 200 CC",
    price: "$6.500"
  }
];

const PISCO = [
  {
    name: "Mistral 35",
    price: "$4.000"
  },
  {
    name: "Mistral 40",
    price: "$4.500"
  },
  {
    name: "Mistral Apple",
    price: "$6.000"
  },
  {
    name: "Mistral Honey",
    price: "$6.000"
  },
  {
    name: "Alto del Carmen 35",
    price: "$4.000"
  },
  {
    name: "Alto del Carmen 40",
    price: "$4.500"
  },
  {
    name: "Horcon Quemado 35",
    price: "$5.500"
  },
  {
    name: "Horcon Quemado 40",
    price: "$6.000"
  },
  {
    name: "Mistral Nobel Barrica Tostada",
    price: "$6.500"
  },
  {
    name: "Malpaso 35",
    price: "$4.500"
  },
  {
    name: "Malpaso 40",
    price: "$6.000"
  },
  {
    name: "Republicano 35",
    price: "$5.000"
  }
];

const RON = [
  {
    name: "Habana Club Especial",
    price: "$3.500"
  },
  {
    name: "Añejo 7 Años",
    price: "$6.500"
  },
  {
    name: "Reserva",
    price: "$4.000"
  },
  {
    name: "Pampero",
    price: "$5.000"
  },
  {
    name: "Habana Club Selección de Maestro",
    price: "$11.000"
  },
  {
    name: "Matusalem",
    price: "$7.000"
  },
  {
    name: "Malibu",
    price: "$5.000"
  }
];

const VODKA = [
  {
    name: "Stolichnaya",
    price: "$4.500"
  },
  {
    name: "Sky",
    price: "$4.500"
  },
  {
    name: "Absolut",
    price: "$5.500"
  }
];

const GIN = [
  {
    name: "Beefeater Pink",
    price: "$6.500"
  },
  {
    name: "Beefeater",
    price: "$5.500"
  },
  {
    name: "Beefeater Orange",
    price: "$6.000"
  },
  {
    name: "Tanqueray",
    price: "$5.500"
  },
  {
    name: "Tanqueray Sevilla Royal",
    price: "$5.500"
  },
  {
    name: "Bulldog",
    price: "$7.500"
  },
  {
    name: "Hendricks",
    price: "$8.000"
  },
  {
    name: "Bombay Sapphire",
    price: "$5.500"
  },
  {
    name: "Bombay Raspberry",
    price: "$6.000"
  }
];

const BAJATIVOS = [
  {
    name: "Menta",
    price: "$3.000"
  },
  {
    name: "Amaretto",
    price: "$3.000"
  },
  {
    name: "Fernet",
    price: "$6.300"
  }
];

const WHISKY = [
  {
    name: "Jack Daniels Honey",
    price: "$8.500"
  },
  {
    name: "Old 7",
    price: "$8.500"
  },
  {
    name: "Apple",
    price: "$8.500"
  },
  {
    name: "Chivas Regal 12 Años",
    price: "$8.000"
  },
  {
    name: "Johnnie Walker",
    price: "$12.000"
  },
  {
    name: "Black Label",
    price: "$8.500"
  },
  {
    name: "Red Label",
    price: "$6.500"
  },
  {
    name: "Ballantines",
    price: "$6.500"
  },
  {
    name: "Ballantines 12 Años",
    price: "$11.500"
  }
];

const CABERNET_SAUVIGNON = [
  {
    name: "Marquez de Casa Concha",
    price: "$21.000"
  },
  {
    name: "Misiones de Rengo",
    price: "$9.000"
  },
  {
    name: "Casillero del Diablo",
    price: "$4.500"
  },
  {
    name: "Medalla Real",
    price: "$12.900"
  }
];

const CARMENERE = [
  {
    name: "Marquez de Casa Concha",
    price: "$19.800"
  },
  {
    name: "Casillero del Diablo",
    price: "$7.000"
  },
  {
    name: "Casillero Reserva Privada",
    price: "$14.900"
  }
];

const MERLOT = [
  {
    name: "Castillo Molina",
    price: "$14.900"
  },
  {
    name: "Misiones de Rengo, Cuvee",
    price: "$13.900"
  }
];

const SECTIONS = [
  {
    id: "pizzas-clasicas",
    title: "Pizzas clásicas",
    subtitle: "Elige en tamaño Familiar o XL.",
    items: PIZZAS_CLASICAS
  },
  {
    id: "pizzas-favoritas",
    title: "Pizzas favoritas",
    subtitle: "Sabores tradicionales de la casa.",
    items: PIZZAS_FAVORITAS
  },
  {
    id: "combinada",
    title: "Combinada",
    subtitle: "La mezcla infaltable.",
    items: [
      {
        name: "Combinada",
        desc: COMBINADA,
        badge: "Mix"
      }
    ]
  },
  {
    id: "arma-tu-pizza",
    title: "Ármala a tu gusto",
    subtitle: "Ingredientes extra disponibles.",
    note: "Agrega tus favoritos según disponibilidad.",
    chips: INGREDIENTES
  },
  {
    id: "cervezas",
    title: "Cervezas",
    subtitle: "Botellas, shop y micheladas.",
    items: CERVEZAS
  },
  {
    id: "cerveza-sin-alcohol",
    title: "Cerveza sin alcohol",
    subtitle: "Opciones 0°.",
    items: CERVEZA_SIN_ALCOHOL
  },
  {
    id: "clasicos",
    title: "Clásicos",
    subtitle: "Coctelería de la casa.",
    items: CLASICOS
  },
  {
    id: "mojitos",
    title: "Mojitos",
    subtitle: "Clásicos, sabores y sin alcohol.",
    items: MOJITOS
  },
  {
    id: "bebidas",
    title: "Bebidas",
    subtitle: "Refrescos y energéticas.",
    items: BEBIDAS
  },
  {
    id: "jugos-naturales",
    title: "Jugos naturales",
    subtitle: "Preparados al momento.",
    items: JUGOS_NATURALES
  },
  {
    id: "espumantes",
    title: "Espumantes",
    subtitle: "Para celebrar.",
    items: ESPUMANTES
  },
  {
    id: "pisco",
    title: "Pisco",
    subtitle: "Servicio simple.",
    items: PISCO
  },
  {
    id: "ron",
    title: "Ron (sin bebida)",
    subtitle: "Servicio simple.",
    items: RON
  },
  {
    id: "vodka",
    title: "Vodka",
    subtitle: "Servicio simple.",
    items: VODKA
  },
  {
    id: "gin",
    title: "Gin",
    subtitle: "Servicio simple.",
    items: GIN
  },
  {
    id: "bajativos",
    title: "Bajativos",
    subtitle: "Para el cierre.",
    items: BAJATIVOS
  },
  {
    id: "whisky",
    title: "Whisky",
    subtitle: "Selección de la casa.",
    items: WHISKY
  },
  {
    id: "cabernet-sauvignon",
    title: "Cabernet Sauvignon",
    subtitle: "Vinos en botella.",
    items: CABERNET_SAUVIGNON
  },
  {
    id: "carmenere",
    title: "Carmenere",
    subtitle: "Vinos en botella.",
    items: CARMENERE
  },
  {
    id: "merlot",
    title: "Merlot",
    subtitle: "Vinos en botella.",
    items: MERLOT
  }
];

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Menú Taltal Pizza",
  url: `${siteUrl}/menu`,
  hasMenuSection: SECTIONS.map((section) => {
    const items = section.items?.length
      ? section.items
      : section.chips?.length
        ? [
            {
              name: "Ingredientes",
              desc: section.chips.join(", ")
            }
          ]
        : [];

    return {
      "@type": "MenuSection",
      name: section.title,
      description: section.subtitle,
      hasMenuItem: items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.desc
      }))
    };
  })
};

export const metadata = {
  title: "Menú",
  description:
    "Carta digital de Taltal Pizza. Pizzas familiares y XL, coctelería y vinos.",
  alternates: {
    canonical: "/menu"
  },
  openGraph: {
    title: "Menú | Taltal Pizza",
    description:
      "Carta digital de Taltal Pizza. Pizzas familiares y XL, coctelería y vinos."
  }
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <div className="menu-page">
        <div className="page menu">
          <header className="menu-hero">
            <div className="menu-hero-top">
              <Image
                src="/brand/logo.jpeg"
                alt="Logo Taltal Pizza"
                width={140}
                height={140}
                className="menu-logo"
                priority
              />
              <div className="menu-title">
                <p className="menu-kicker">Pizzas 100% artesanales</p>
                <h1 id="menu-title">Menú</h1>
                <p className="menu-subtitle">
                  Elige la que quieras en tamaño familiar o XL.
                </p>
                <p className="menu-note">
                  Carta demo. Ajustaremos platos, secciones y precios en la
                  próxima versión.
                </p>
              </div>
            </div>
            <div className="menu-meta">
              <span className="menu-meta-item">Tamaño Familiar o XL</span>
              <span className="menu-meta-item">Hecho al momento</span>
              <span className="menu-meta-item">Pedidos hasta 23:00</span>
            </div>
          </header>

          <MenuClient sections={SECTIONS} />
        </div>
      </div>
    </>
  );
}
