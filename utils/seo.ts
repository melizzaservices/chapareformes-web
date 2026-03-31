export const generateLocalBusinessSchema = (locale: "fr" | "es" | "en") => {
  const descriptions = {
    fr: "Rénovation de luxe à Paris. 20 ans d'expertise en design Haussmannien et minimalisme.",
    es: "Reformas de lujo en París. 20 años de experiencia en diseño Haussmanniano y minimalismo.",
    en: "Luxury renovations in Paris. 20 years of expertise in Haussmann design and minimalism."
  };

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "CHAPAREFORMES",
    "image": "https://chapareformes.paris/assets/logo.jpg", // Placeholder
    "@id": "https://chapareformes.paris",
    "url": "https://chapareformes.paris",
    "telephone": "+33123456789", // Placeholder
    "description": descriptions[locale] || descriptions.fr,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenue Montaigne", // Placeholder determinista
      "addressLocality": "Paris",
      "postalCode": "75008",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.866667,
      "longitude": 2.333333
    },
    "areaServed": [
      { "@type": "City", "name": "Paris" },
      { "@type": "AdministrativeArea", "name": "Île-de-France" }
    ],
    "priceRange": "$$$$"
  };
};
