import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Bakery",

    name: siteConfig.name,
    description: siteConfig.description,

    image: siteConfig.ogImage,
    logo: "/logo/logo.svg",

    telephone: siteConfig.phone,
    email: siteConfig.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "PK",
    },

    url: "https://cakoo.com",

    sameAs: [
      siteConfig.instagram,
      siteConfig.facebook,
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}