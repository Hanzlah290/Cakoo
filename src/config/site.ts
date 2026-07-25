export const siteConfig = {
  name: "Cakoo Bakery",

  description:
    "Premium handcrafted cakes, desserts, and celebration treats made with passion.",

  ogImage: "/images/og-image.png",  

  links: { favicon: "/logo/logo.svg" },

  url: "https://cakoo.com",

  logo: "/logo/logo.svg",

  phone: "+92 300 1234567",

  email: "hello@cakoo.com",

  address: "Attock, Pakistan",

  whatsapp: "https://wa.me/923001234567",

  instagram: "https://instagram.com/cakoo",

  facebook: "https://facebook.com/cakoo",

  hours: {
    weekdays: "9:00 AM – 9:00 PM",
    weekends: "10:00 AM – 10:00 PM",
  },

  navigation: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
} as const;