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
    id: "brunch",
    title: "Brunch",
    subtitle: "Sábados y domingos · 11:00 a 14:30.",
    note: "Sección demo: ajustaremos platos y precios.",
    items: [
      {
        name: "Huevos a la nortina",
        desc: "Huevos revueltos, cebolla caramelizada, pimentón asado y pan de masa madre.",
        price: "$6.900"
      },
      {
        name: "Tostadas palta & tomate",
        desc: "Palta cremosa, tomate confitado, aceite de oliva, orégano.",
        price: "$5.900"
      },
      {
        name: "Bowl granola costera",
        desc: "Yogurt, granola artesanal y frutas de temporada.",
        price: "$4.900"
      }
    ]
  },
  {
    id: "cocteleria",
    title: "Coctelería",
    subtitle: "Clásicos y de autor.",
    note: "Sección demo: ajustaremos carta final.",
    items: [
      {
        name: "Pisco sour de la casa",
        desc: "Pisco, limón sutil, jarabe y amargo.",
        price: "$4.900"
      },
      {
        name: "Mojito menta-jengibre",
        desc: "Ron blanco, menta fresca y jengibre.",
        price: "$5.200"
      },
      {
        name: "Spritz Taltal",
        desc: "Espumante, bitter y toque cítrico.",
        price: "$5.500"
      }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas sin alcohol",
    subtitle: "Refrescantes y caseras.",
    items: [
      {
        name: "Limonada menta-jengibre",
        desc: "Natural, sin jarabes.",
        price: "$3.200"
      },
      {
        name: "Bebidas lata",
        desc: "Coca-Cola, Sprite, Fanta.",
        price: "$2.000"
      },
      {
        name: "Agua mineral",
        desc: "Con o sin gas.",
        price: "$1.800"
      }
    ]
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
    "Carta digital de Taltal Pizza. Pizzas familiares y XL, brunch y coctelería.",
  alternates: {
    canonical: "/menu"
  },
  openGraph: {
    title: "Menú | Taltal Pizza",
    description:
      "Carta digital de Taltal Pizza. Pizzas familiares y XL, brunch y coctelería."
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
