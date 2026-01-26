import "./globals.css";
import { Cinzel, Work_Sans } from "next/font/google";
import { getSiteUrl } from "../lib/site-url";

const heading = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const siteUrl = getSiteUrl();

const siteTitle = "Taltal Pizza | Pizzas 100% artesanales";
const siteDescription =
  "Pizzería artesanal en Taltal. Menú digital, sabores clásicos y recetas del norte de Chile.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Taltal Pizza"
  },
  description: siteDescription,
  applicationName: "Taltal Pizza",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "taltal pizza",
    "pizzas artesanales",
    "pizzeria taltal",
    "menu digital",
    "pizza familiar",
    "pizza xl",
    "pizzas chile"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Taltal Pizza",
    locale: "es_CL",
    images: [
      {
        url: "/brand/logo.jpeg",
        alt: "Logo de Taltal Pizza"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/brand/logo.jpeg"]
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6b2b2c"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
