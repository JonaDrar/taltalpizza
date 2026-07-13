import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { getSiteUrl } from "../../lib/site-url";
import { SECTIONS as MENU_SECTIONS } from "../../lib/menu-data.mjs";
import MenuClient from "./MenuClient";

const siteUrl = getSiteUrl();

// Las fotos se generan de a poco (scripts/generar-imagenes.mjs). Solo adjuntamos
// la imagen de un plato si el archivo ya existe, para no dejar imágenes rotas
// mientras falten por generar.
function withExistingPhotos(sections) {
  return sections.map((section) => {
    if (!section.items) return section;

    return {
      ...section,
      items: section.items.map((item) => {
        if (!item.photo) return item;

        const file = path.join(process.cwd(), "public", "menu", `${item.photo}.png`);
        if (!existsSync(file)) return item;

        return { ...item, image: `/menu/${item.photo}.png` };
      })
    };
  });
}

const SECTIONS = withExistingPhotos(MENU_SECTIONS);

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
    "Carta digital de Taltal Pizza. Pizzas individuales, familiares y XL, hamburguesas, tablas, brunch y cafetería.",
  alternates: {
    canonical: "/menu"
  },
  openGraph: {
    title: "Menú | Taltal Pizza",
    description:
      "Carta digital de Taltal Pizza. Pizzas individuales, familiares y XL, hamburguesas, tablas, brunch y cafetería."
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
                  Elige la que quieras en tamaño individual, familiar o XL.
                </p>
              </div>
            </div>
            <div className="menu-meta">
              <span className="menu-meta-item">Individual, Familiar o XL</span>
              <span className="menu-meta-item">Hecho al momento</span>
              <span className="menu-meta-item">Café de especialidad</span>
            </div>
          </header>

          <MenuClient sections={SECTIONS} />
        </div>
      </div>
    </>
  );
}
