"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10.5 3a7.5 7.5 0 0 1 5.96 12.04l3.25 3.26a1 1 0 1 1-1.42 1.41l-3.25-3.25A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MenuClient({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("[data-section]")
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const searchResults = useMemo(() => {
    if (!query) return [];
    const term = normalizeText(query);

    return sections
      .flatMap((section) =>
        (section.items ?? []).map((item) => ({
          ...item,
          sectionId: section.id,
          sectionTitle: section.title
        }))
      )
      .filter((item) => {
        const haystack = normalizeText(
          `${item.name} ${item.desc ?? ""} ${item.sectionTitle ?? ""}`
        );
        return haystack.includes(term);
      })
      .slice(0, 8);
  }, [query, sections]);

  const handleNavClick = (id) => (event) => {
    event.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResultClick = (id) => () => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="menu-layout">
      <nav className="menu-nav" aria-label="Secciones del menú">
        <div className="menu-nav-search">
          <span className="menu-search-icon" aria-hidden="true">
            <SearchIcon />
          </span>
          <label className="sr-only" htmlFor="menu-search">
            Buscar en el menú
          </label>
          <input
            id="menu-search"
            type="search"
            placeholder="Buscar en el menú"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query ? (
            <button
              type="button"
              className="menu-search-clear"
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
            >
              ×
            </button>
          ) : null}
        </div>

        {query ? (
          <div className="menu-search-results">
            <p className="menu-search-label">Buscar “{query}”</p>
            <p className="menu-search-group">Productos</p>
            {searchResults.length ? (
              <div className="menu-search-list">
                {searchResults.map((item) => (
                  <button
                    key={`${item.sectionId}-${item.name}`}
                    type="button"
                    className="menu-search-item"
                    onClick={handleResultClick(item.sectionId)}
                  >
                    <div>
                      <span className="menu-search-title">{item.name}</span>
                      <span className="menu-search-section">
                        {item.sectionTitle}
                      </span>
                    </div>
                    {item.price ?? item.prices?.servir ? (
                      <span className="menu-search-price">
                        {item.price ?? item.prices.servir}
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>
            ) : (
              <p className="menu-search-empty">Sin resultados.</p>
            )}
          </div>
        ) : null}

        <p className="menu-nav-title">Secciones</p>
        <div className="menu-nav-list">
          {sections.map((section) => (
            <a
              className="menu-nav-link"
              href={`#${section.id}`}
              key={section.id}
              aria-current={activeSection === section.id ? "true" : "false"}
              onClick={handleNavClick(section.id)}
            >
              {section.title}
            </a>
          ))}
        </div>
        <p className="menu-nav-callout">
          Pregunta por ingredientes sin lactosa o sin gluten.
        </p>
      </nav>

      <main className="menu-content" aria-labelledby="menu-title">
        {sections.map((section) => (
          <section
            className="menu-section"
            id={section.id}
            data-section
            key={section.id}
          >
            <header className="menu-section-header">
              <h2>{section.title}</h2>
              {section.subtitle ? <p>{section.subtitle}</p> : null}
              {section.note && !section.chips?.length ? (
                <p className="menu-section-note">{section.note}</p>
              ) : null}
            </header>

            {section.items?.length ? (
              <div className="menu-items-grid">
                {section.items.map((item) => (
                  <article
                    className={`menu-card${
                      item.image ? " menu-card--with-image" : ""
                    }`}
                    key={item.name}
                  >
                    <div className="menu-card-body">
                      <div className="menu-card-text">
                        <div className="menu-card-header">
                          <div className="menu-card-title">
                            <h3>{item.name}</h3>
                            {item.vegetarian ? (
                              <span
                                className="menu-veg"
                                title="Vegetariano"
                                aria-label="Vegetariano"
                              >
                                🍃
                              </span>
                            ) : null}
                          </div>
                          {item.badge ? (
                            <span className="menu-badge">{item.badge}</span>
                          ) : null}
                        </div>
                        {item.desc ? <p>{item.desc}</p> : null}
                        {item.prices ? (
                          <div className="menu-card-prices">
                            <div className="menu-price-row">
                              <span className="menu-price-label">
                                Para servir
                              </span>
                              <span className="menu-price-value">
                                {item.prices.servir}
                              </span>
                            </div>
                            <div className="menu-price-group">
                              <span className="menu-price-group-label">
                                Para llevar
                              </span>
                              <div className="menu-price-row menu-price-row--sub">
                                <span className="menu-price-label">Mediano</span>
                                <span className="menu-price-value">
                                  {item.prices.llevar.mediano}
                                </span>
                              </div>
                              <div className="menu-price-row menu-price-row--sub">
                                <span className="menu-price-label">Grande</span>
                                <span className="menu-price-value">
                                  {item.prices.llevar.grande}
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : item.price ? (
                          <span className="menu-card-price">{item.price}</span>
                        ) : null}
                      </div>
                      {item.image ? (
                        <div className="menu-card-media">
                          <Image
                            src={item.image}
                            alt={item.imageAlt ?? item.name}
                            width={220}
                            height={220}
                            className="menu-card-image"
                          />
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {section.chips?.length ? (
              <div className="menu-extras">
                {section.note ? (
                  <p className="menu-extras-title">{section.note}</p>
                ) : null}
                <div className="menu-list">
                  {section.chips.map((chip) => (
                    <span className="menu-chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  );
}
