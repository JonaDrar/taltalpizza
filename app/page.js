import Image from "next/image";
import Link from "next/link";
import { getSiteUrl } from "../lib/site-url";

const siteUrl = getSiteUrl();

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Taltal Pizza",
  image: [`${siteUrl}/brand/logo.jpeg`],
  url: siteUrl,
  telephone: "+56 9 1234 5678",
  priceRange: "$$",
  servesCuisine: ["Pizza"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Costanera 102",
    addressLocality: "Taltal",
    addressCountry: "CL"
  },
  menu: `${siteUrl}/menu`
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <div className="page">
      <header className="hero">
        <nav className="nav" aria-label="Principal">
          <div className="logo">
            <Image
              src="/brand/logo.jpeg"
              alt="Logo Taltal Pizza"
              width={120}
              height={120}
              className="logo-image"
              priority
            />
            <div>
              <p className="logo-title">Taltal Pizza</p>
              <p className="logo-subtitle">Fresco y rico · Artesanal</p>
            </div>
          </div>
          <div className="nav-actions">
            <a className="nav-link" href="#historia">
              Historia
            </a>
            <a className="nav-link" href="#menu">
              Carta
            </a>
            <a className="nav-link" href="#visitanos">
              Visítanos
            </a>
          </div>
          <div className="nav-cta">
            <Link className="btn btn-primary" href="/menu">
              Ver menú
            </Link>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Pizzas 100% artesanales</p>
            <h1>La pizza de Taltal con masa lenta y sabor del norte.</h1>
            <p className="lead">
              Trabajamos con fermentación lenta, ingredientes locales y un horno
              a alta temperatura para una base ligera y crujiente.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-secondary" href="/menu">
                Explorar la carta
              </Link>
              <a className="btn btn-ghost" href="#visitanos">
                Reservar mesa
              </a>
            </div>
            <div className="hero-info">
              <div>
                <p className="hero-label">Horario</p>
                <p className="hero-value">Mié a Dom · 18:30 - 23:30</p>
              </div>
              <div>
                <p className="hero-label">Ubicación</p>
                <p className="hero-value">Costanera 102, Taltal</p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-title">Menú familiar y XL</p>
            <h2>Carta digital lista para escanear</h2>
            <p className="card-desc">
              El menú está pensado para QR en mesa, con opciones clásicas,
              combinadas y personalizables.
            </p>
            <Link className="btn btn-primary" href="/menu">
              Abrir menú QR
            </Link>
          </div>
        </div>
      </header>

      <section className="section" id="historia">
        <div className="section-header">
          <p className="eyebrow">Nuestra historia</p>
          <h2>Horno, costa y familia.</h2>
        </div>
        <div className="story-grid">
          <div className="story-card">
            <h3>Masa lenta</h3>
            <p>
              Fermentamos por 48 horas para lograr una textura liviana con borde
              inflado y sabor profundo.
            </p>
          </div>
          <div className="story-card">
            <h3>Sabores del norte</h3>
            <p>
              Usamos verduras, carnes y mariscos de la zona, con aliños
              tradicionales.
            </p>
          </div>
          <div className="story-card">
            <h3>Horno al rojo</h3>
            <p>
              Cocción rápida para sellar jugos, dorar queso y mantener la base
              crujiente.
            </p>
          </div>
        </div>
      </section>

      <section className="section highlight" id="menu">
        <div className="section-header">
          <p className="eyebrow">Carta</p>
          <h2>Clásicas, del norte y combinadas.</h2>
        </div>
        <div className="specials-grid">
          {[
            {
              name: "Napolitana",
              desc: "Queso, salsa, tomate, jamón y aceituna.",
              tag: "Clásica"
            },
            {
              name: "Chilena",
              desc: "Queso, salsa, tomate, carne, cebolla y aceituna.",
              tag: "Favorita"
            },
            {
              name: "Suprema",
              desc: "Queso, salsa, carne, pollo y chorizo.",
              tag: "Especial"
            }
          ].map((item) => (
            <div className="special-card" key={item.name}>
              <div className="special-tag">{item.tag}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link className="btn btn-primary" href="/menu">
            Ver menú completo
          </Link>
        </div>
      </section>

      <section className="section" id="visitanos">
        <div className="visit-grid">
          <div>
            <p className="eyebrow">Visítanos</p>
            <h2>Un local con vista a la costanera.</h2>
            <p className="lead">
              Mesas interiores, terraza y delivery local. Reserva con tiempo para
              fines de semana.
            </p>
            <div className="visit-details">
              <div>
                <p className="hero-label">Dirección</p>
                <p className="hero-value">Costanera 102, Taltal</p>
              </div>
              <div>
                <p className="hero-label">Reservas</p>
                <p className="hero-value">+56 9 1234 5678</p>
              </div>
              <div>
                <p className="hero-label">Delivery</p>
                <p className="hero-value">Pedidos hasta 23:00</p>
              </div>
            </div>
          </div>
          <div className="visit-card">
            <h3>Eventos privados</h3>
            <p>
              Armamos menús especiales para celebraciones o reuniones de equipo.
            </p>
            <button className="btn btn-ghost">Solicitar cotización</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="logo-title">Taltal Pizza</p>
          <p className="logo-subtitle">Pizza artesanal · Desde 2020</p>
        </div>
        <div className="footer-links">
          <Link href="/menu">Carta</Link>
          <a href="#historia">Historia</a>
          <a href="#visitanos">Contacto</a>
        </div>
        <p className="footer-note">Hecho en Taltal · Menú QR 2026.</p>
      </footer>
      </div>
    </>
  );
}
